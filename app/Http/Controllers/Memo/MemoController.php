<?php

namespace App\Http\Controllers\Memo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Memos\MemoCategory;
use App\Model\Memos\Memo;
use App\Model\Memos\Section;
use App\Model\Memos\SectionContent;
use App\Model\Traits\Favorite;

class MemoController extends Controller
{
	use Favorite;
	public function search(Request $request)
	{
		$memos = [];
    $memos[] = Memo::where('name', 'like', '%' . $request->value . '%')->orderBy('created_at', 'desc')->get();
    $memos[] = 'memo';
    foreach($memos[0] as $key => $memo){
    	$result = $this->favoritecheck('App\Model\Memos\MemoStock', 'memo_id', $memo->id);
    	$count = $this->favoritecount('App\Model\Memos\MemoStock', 'memo_id', $memo->id);
    	$memos[0][$key]['result'] = $result;
    	$memos[0][$key]['count'] = $count;
    }
    $memos[] = 'fa-pencil-alt';
    $memos[] = 'memostock';
    return $memos;
	}

	public function show($id){
		$memo = Memo::find($id);
		$result = $this->favoritecheck('App\Model\Memos\MemoStock', 'memo_id', $memo->id);
    $count = $this->favoritecount('App\Model\Memos\MemoStock', 'memo_id', $memo->id);
		return view('memos.show',['memo' => $memo, 'result' => $result, 'count' => $count]);
	}

	public function edit($id){
		$memo = Memo::find($id);
		$categories = MemoCategory::all();
		return view('memos.edit',['memo' => $memo, 'categories' => $categories]);
	}

	public function create()
	{
		$categories = MemoCategory::all();
		return view('memos.create',['categories' => $categories]);
	}

	public function store(Request $request)
	{
		try{
			// dd($request->all());
			$memo = new Memo;
			$memo->user_id = Auth::user()->id;;
			$memo->name = $request->memo_name;
			$memo->memo_category_id = $request->category_id;
			$memo->status = $request->status;
			$memo->save();

			foreach($request->section_title as $section_key => $title){
				$section = new Section;
				$section->memo_id = $memo->id;
				$section->title = $title;
				$section->save();

				foreach($request->section[$section_key] as $order => $content){
					// dd($content);
					$section_content = new SectionContent;
					$section_content->section_id = $section->id;
					$section_content->order = $order;
					if(isset($content['section_content'])){
						$section_content->content = $content['section_content'][0];
					}elseif(isset($content['section_code'])){
						$section_content->code = $content['section_code'][0];
					}elseif(isset($content['section_image'])){
						$section_content->image = $content['section_image'][0];
					}
					$section_content->save();
				}

			}
			return view('home');

		}catch (Throwable $e){
			report($e);
			return false;
		}
	}

	public function update(Request $request)
	{
		try{
			$editMemo = Memo::find($request->memo_id);
			$editMemo->name = $request->memo_name;
			$editMemo->memo_category_id = $request->category_id;
			$editMemo->status = $request->status;
			$editMemo->save();
			$count = 0;
			// dd($request->all());
			foreach($request->section_id as $key => $section){
				$editSection = Section::find($key);
				if(!is_null($editSection)){
					$editSection->title = $section;
				}else{
					$editSection = new Section;
					$editSection->title = $section;
					$editSection->memo_id = $editMemo->id;
				}
				$editSection->save();
				$count++;
				// dd($request->section[3]);


				foreach($request->section[$count] as $key => $content){
					$editContent = SectionContent::find(key($content["section_id"]));
					if(empty($editContent)){
						$editContent = new SectionContent;
					}
					$editContent->section_id = $editSection->id;
					$editContent->order = $key;

					if(key($content["section_id"][key($content["section_id"])]) == 'section_content'){
						$editContent->content = $content["section_id"][key($content["section_id"])]['section_content'];
					}elseif(key($content["section_id"][key($content["section_id"])]) == 'section_code'){
						$editContent->code = $content["section_id"][key($content["section_id"])]['section_code'];
					}elseif(key($content["section_id"][key($content["section_id"])]) == 'section_image'){
						$editContent->image = $content["section_id"][key($content["section_id"])]['section_image'];
					}
					$editContent->save();
				}
			}
			return view('home');
		}catch (Throwable $e){
			report($e);
			return false;
		}
	}

	public function deletecontent(Request $request)
	{
		$deletecontent = SectionContent::find($request->content);
		try{
			if(isset($deletecontent)){
			  $deletecontent->delete();
			}else{
				return false;
			}
		}catch (Throwable $e){
			report($e);
			return false;
		}
	}
}
