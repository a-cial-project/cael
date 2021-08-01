<?php

namespace App\Http\Controllers\Interview;
use App\Model\Interviews\Interview;
use Illuminate\Http\Request;
use App\Http\Requests\InterviewRequest;
use App\Http\Controllers\Controller;

class InterviewController extends Controller
{
     /**
     * 登録された記事データ一覧を表示する画面
     * @return view
     */
    public function index() {
        return view('interviews.interview');
    }
     /**
     * 登録された記事データ詳細を表示する画面
     * @return view
     */
    public function show() {
        return view('interviews.show');
    }

    // 以下管理者ページ
     /**
     * 記事登録画面を表示する
     *
     * @return view
     */
    public function create_post() {
        return view('interviews.add_post');
    }
     /**
     * 記事データを受け取りinterviewテーブルへ登録処理を実行
     * @param  App\Http\Requests\InterviewRequest
     * $request
     */
     public function store_post(InterviewRequest $request) {
        //  記事のデータを受け取る
         $inputs = $request->all();
        //  記事登録
        try {
            Interview::create([
                'name' => $inputs['name'],
                'nickname' => $inputs['nickname'],
                'sport' => $inputs['sport'],
                'profile' => $inputs['profile'],
                'content' => $inputs['content'],
            ]);
            // \DB::commit();
        } catch (\Throwable $e) {
            // \DB::rollback();
            abort(500);
        }
         session()->flash('err_msg', '記事を追加しました');
         return redirect()->route('interview.show_posts');
 }

    /**
     * 記事データを管理する画面
     * @return view
     */
    public function show_posts() {
        $interviews = Interview::all();
        // dd($interviews);
        return view('interviews.show_posts', ['interviews' => $interviews]);
    }

    /**
     * 登録された記事を確認する画面
     * @param int $id
     * @return view
     */
    public function check_post($id) {
        $interview = Interview::find($id);
        // dd($interview);
        if (is_null($interview)) {
            session()->flash('err_msg', 'データがありません');
            return redirect(route('interview.show_posts'));
        }
        return view('interviews.check_post', ['interview' => $interview]);
    }

     /**
     * 登録された記事データを更新する画面
     * @return view
     */
    public function update_post() {
        return view('interviews.update_post');
    }

    /**
     * 登録された記事データ削除を実行
     * @return view
     */
    public function destroy_post() {
        return view('interviews.destroy_post');
    }
}
