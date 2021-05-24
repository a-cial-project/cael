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
			  }
			}
			$sport = new Sport;
			$sport->user_id = Auth::user()->id;
			$sport->name = $request->name;
			if(isset($category)){
				$sport->sport_category_id = $category->id;
			}elseif(isset($sport_category)){
				$sport->sport_category_id = $sport_category->id;
			}elseif(is_null($request->new_category)){
				$sport->sport_category_id = $request->category_id;
			}
			$sport->content = $request->content;
			$sport->date = $request->date;
			$sport->limit = $request->limit;
			$sport->save();

			$sports = Sport::orderBy('created_at', 'desc')->paginate(10);
		  return view('sports.index',['sports' => $sports]);
		} catch (Throwable $e) {
			report($e);
			return false;
		}
	}
}
