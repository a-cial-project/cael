<?php

namespace App\Http\Controllers\Engineer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Engineers\Engineer;
use App\Model\Engineers\EngineerCategory;
use App\Model\Engineers\EngineerComment;
use App\Model\Traits\Favorite;

class EngineerController extends Controller
{
	use Favorite;
	public function index()
	{
		// dd($search);
		// $engineers = Engineer::orderBy('created_at', 'desc')->paginate(10);
		return view('engineers.index');
	}

	public function search(Request $request)
	{
		$engineers = [];
		$engineers[] = Engineer::where('name', 'like', '%' . $request->value . '%')->orderBy('created_at', 'desc')->get();
		$engineers[] = 'engineer';
	    foreach($engineers[0] as $key => $engineer){
	    	$result = $this->favoritecheck('App\Model\Engineers\EngineerFavorite', 'engineer_id', $engineer->id);
	    	$count = $this->favoritecount('App\Model\Engineers\EngineerFavorite', 'engineer_id', $engineer->id);
	    	$engineers[0][$key]['result'] = $result;
	    	$engineers[0][$key]['count'] = $count;
	    }
	    $engineers[] = 'fa-laptop-code';
	    $engineers[] = 'engineerfavorite';
	    return $engineers;
	}

	public function show($id)
	{
		$engineer = Engineer::find($id);
		$result = $this->favoritecheck('App\Model\Engineers\EngineerFavorite', 'engineer_id', $engineer->id);
		$count = $this->favoritecount('App\Model\Engineers\EngineerFavorite', 'engineer_id', $engineer->id);
		$engineercomments = EngineerComment::where('engineer_id', $engineer->id)->get();
		return view('engineers.show',['engineer' => $engineer, 'engineercomments' => $engineercomments, 'result' => $result, 'count' => $count]);
	}

	public function create()
	{
		$categories = EngineerCategory::all();
		return view('engineers.create',['categories' => $categories]);
	}

	public function store(Request $request)
	{

    // validation ここから追加
	$rules = [
		'name' => ['required'],
		'content' => ['required'],
		'start' => ['required', 'after:"now"'],
	];
    $this->validate($request, $rules);
    // ここまで追加

		try{
			if(!is_null($request->new_category)){
				$category = EngineerCategory::where('name', $request->new_category)->first();
				if(!isset($category)){
					$engineer_category = new EngineerCategory;
					$engineer_category->name = $request->new_category;
					$engineer_category->save();
					$request->engineer_category_id = $engineer_category->id;
				}elseif(isset($category)){
					$request->engineer_category_id = $category->id;
				}
			}

			$engineer = new Engineer;
			$engineer->user_id = Auth::user()->id;
			$engineer->fill($request->all())->save();

			$engineers = Engineer::orderBy('created_at', 'desc')->paginate(10);
			return redirect('/');
		} catch (Throwable $e) {
			report($e);
			return false;
		}
	}

	public function edit($id)
	{
		$engineer = Engineer::find($id);
		$categories = EngineerCategory::all();
		return view('engineers.edit',['engineer' => $engineer, 'categories' => $categories]);
	}

	public function update(Request $request)
	{
		// validation ここから追加
		$rules = [
			'name' => ['required'],
			'content' => ['required'],
			'date' => ['required', 'after:"now"'],
		];
		$this->validate($request, $rules);
		// ここまで追加

		try{
			$engineer = Engineer::find($request->id);
			if(!is_null($request->new_category)){
				$category = EngineerCategory::where('name', $request->new_category)->first();
				if(!isset($category)){
					$engineer_category = new EngineerCategory;
					$engineer_category->name = $request->new_category;
					$engineer_category->save();
					$request->engineer_category_id = $engineer_category->id;
				}elseif(isset($category)){
					$request->engineer_category_id = $category->id;
				}
			}
			$engineer->fill($request->all())->save();

			$engineer = Engineer::find($engineer->id);
			$result = $this->favoritecheck('App\Model\Engineers\EngineerFavorite', 'engineer_id', $engineer->id);
			$count = $this->favoritecount('App\Model\Engineers\EngineerFavorite', 'engineer_id', $engineer->id);
			$engineercomments = EngineerComment::where('engineer_id', $engineer->id)->get();
			return view('engineers.show',['engineer' => $engineer, 'engineercomments' => $engineercomments, 'result' => $result, 'count' => $count]);
		} catch (Throwable $e) {
			report($e);
			return false;
		}
	}
}
