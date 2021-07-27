<?php

namespace App\Http\Controllers\Sport;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Auth;
use App\Model\Sports\Sport;
use App\Model\Sports\SportCategory;
use App\Model\Sports\SportComment;
use App\Model\Traits\Favorite;

class SportController extends Controller
{
	use Favorite;
	public function search(Request $request)
	{
	$sports = [];
    $sports[] = Sport::where('name', 'like', '%' . $request->value . '%')->orderBy('created_at', 'desc')->get();
    $sports[] = 'sport';
    foreach($sports[0] as $key => $sport){
    	$result = $this->favoritecheck('App\Model\Sports\SportFavorite', 'sport_id', $sport->id);
    	$count = $this->favoritecount('App\Model\Sports\SportFavorite', 'sport_id', $sport->id);
    	$sports[0][$key]['result'] = $result;
    	$sports[0][$key]['count'] = $count;
    }
    $sports[] = 'fa-running';
    $sports[] = 'sportfavorite';
    return $sports;
	}

	public function show($id)
	{
		$sport = Sport::find($id);
		$result = $this->favoritecheck('App\Model\Sports\SportFavorite', 'sport_id', $sport->id);
		$count = $this->favoritecount('App\Model\Sports\SportFavorite', 'sport_id', $sport->id);
		$sportcomments = SportComment::where('sport_id', $sport->id)->get();
		return view('sports.show',['sport' => $sport, 'sportcomments' => $sportcomments, 'result' => $result, 'count' => $count]);
	}

	public function create()
	{
		$categories = SportCategory::all();
		return view('sports.create',['categories' => $categories]);
	}

	public function store(Request $request)
	{

    // validation
    $rules = [
      'name' => ['required'],
      'content' => ['required'],
      'date' => ['required', 'after:"now"'],
      'limit' => ['required', 'after:"now"']
    ];
    $this->validate($request, $rules);
    // ここまで追加

		try{
			if(!is_null($request->new_category)){
				$category = SportCategory::where('name', $request->new_category)->first();
				if(!isset($category)){
					$sport_category = new SportCategory;
					$sport_category->name = $request->new_category;
					$sport_category->save();
					$request->sport_category_id = $sport_category->id;
			  }
			}
			$sport = new Sport;
			$sport->user_id = Auth::user()->id;
			$sport->fill($request->all())->save();

			$sports = Sport::orderBy('created_at', 'desc')->paginate(10);
		  return redirect('/');
		} catch (Throwable $e) {
			report($e);
			return false;
		}
	}

	public function edit($id)
	{
		$sport = Sport::find($id);
		$categories = SportCategory::all();
		return view('sports.edit',['sport' => $sport, 'categories' => $categories]);
	}

	public function update(Request $request)
	{
		// validation
    $rules = [
      'name' => ['required'],
      'content' => ['required'],
      'date' => ['required', 'after:"now"'],
      'limit' => ['required', 'after:"now"']
    ];
    $this->validate($request, $rules);
    // ここまで追加

		try{
			if(!is_null($request->new_category)){
				$category = SportCategory::where('name', $request->new_category)->first();
				if(!isset($category)){
					$sport_category = new SportCategory;
					$sport_category->name = $request->new_category;
					$sport_category->save();
			  }
			}
			$sport = Sport::find($request->id);
			$sport->fill($request->all())->save();

			$result = $this->favoritecheck('App\Model\Sports\SportFavorite', 'sport_id', $request->id);
			$count = $this->favoritecount('App\Model\Sports\SportFavorite', 'sport_id', $request->id);
			$sportcomments = SportComment::where('sport_id', $request->id)->get();
			return view('sports.show',['sport' => $sport, 'sportcomments' => $sportcomments, 'result' => $result, 'count' => $count]);
		} catch (Throwable $e) {
			report($e);
			return false;
		}
	}
}
