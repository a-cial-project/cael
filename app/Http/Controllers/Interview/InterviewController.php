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
        $interviews = Interview::paginate(12);
        // dd($interviews);
        return view('interviews.interview', ['interviews' => $interviews]);
    }


     /**
     * 登録された記事データ詳細を表示する画面
     * @return view
     */
    public function show($id) {
        $interview = Interview::find($id);
        // dd($interview);
        if (is_null($interview)) {
            session()->flash('err_msg', 'データがありません');
            return redirect(route('interview.interview'));
        }
        return view('interviews.show_detail', ['interview' => $interview]);
    }

     /**
     * 記事の検索機能
     *
     * @return view
     */
    public function search_by_user(Request $request) {
        // キーワードを取得
        $keyword = $request->input('search');
        // クエリ作成
        $query = Interview::query();
        //キーワードが入力されている場合
        if (!empty($keyword)) {
            $query->where('name', 'like', '%'.$keyword.'%')
                ->orWhere('nickname', 'like', '%'.$keyword.'%');
        }
        $interviews = $query->paginate(12);

        return view('interviews.interview',['interviews' => $interviews]);
    }

// 以下管理者用ページ
     /**
     * 記事登録画面を表示する
     *
     * @return view
     */
    public function create_post() {
        return view('interviews.add_post');
    }
     /**
     * 記事データ登録機能
     * @param  App\Http\Requests\InterviewRequest
     * $request
     */
     public function store_post(InterviewRequest $request) {
        //  Validationされた記事のデータを受け取る
         $inputs = $request->all();
         \DB::beginTransaction();
        //  DB登録
        try {
            Interview::create([
                'name' => $inputs['name'],
                'nickname' => $inputs['nickname'],
                'sport' => $inputs['sport'],
                'profile' => $inputs['profile'],
                'content' => $inputs['content'],
            ]);
         \DB::commit();
        } catch (\Throwable $e) {
           \DB::rollback();
            abort(500);
        }
         session()->flash('err_msg', '記事を追加しました');
         return redirect()->route('interview.manage_posts');
 }

    /**
     * 記事データ一覧表示機能
     * @return view
     */
    public function manage_posts() {
        $interviews = Interview::paginate(20);
        // dd($interviews);
        return view('interviews.manage_posts', ['interviews' => $interviews]);
    }

    /**
     * 登録された記事を確認する画面
     * @param int $id
     * @return view
     */
    public function check_post($id) {
        $interview = Interview::find($id);
        if (is_null($interview)) {
            session()->flash('err_msg', 'データがありません');
            return redirect(route('interview.manage_posts'));
        }
        return view('interviews.check_post', ['interview' => $interview]);
    }

     /**
     * 記事編集フォームを表示
     * @return view
     */
    public function update_post($id) {
        $interview = Interview::find($id);
        if (is_null($interview)) {
            session()->flash('err_msg', 'データがありません');
            return redirect(route('interview.manage_posts'));
        }
        return view('interviews.update_post', ['interview' => $interview]);
    }
    /**
     * 記事データ編集機能
     * @param  App\Http\Requests\InterviewRequest
     * $request
     */

    public function update(InterviewRequest $request) {
        //  記事のデータを受け取る
         $inputs = $request->all();
        //  dd($inputs);
        \DB::beginTransaction();
        //  記事登録
        try {
            $interview = Interview::find($inputs['id']);
            $interview->fill([
                'name' => $inputs['name'],
                'nickname' => $inputs['nickname'],
                'sport' => $inputs['sport'],
                'profile' => $inputs['profile'],
                'content' => $inputs['content'],
            ]);
            $interview->save();
            \DB::commit();
        } catch (\Throwable $e) {
            \DB::rollback();
            abort(500);
        }
         session()->flash('err_msg', '記事を編集しました');
         return redirect()->route('interview.manage_posts');
 }
    /**
     * 記事削除機能
     * @return view
     */
    public function destroy_post($id) {
        // dd($id);
        if (is_null($id)) {
            session()->flash('err_msg', 'データがありません');
            return redirect(route('interview.manage_posts'));
        }
        try {
            // 記事の削除
            Interview::destroy($id);
        } catch (\Throwable $e) {
            abort(500);
        }
         session()->flash('err_msg', '記事を削除しました');
         return view('interviews.manage_posts');
 }
   /**
     * 記事の検索機能
     *
     * @return view
     */
    public function search_by_admin(Request $request) {
        // キーワードを取得
        $keyword = $request->input('search');
        // クエリ作成
        $query = Interview::query();
        //キーワードが入力されている場合
        if (!empty($keyword)) {
            $query->where('name', 'like', '%'.$keyword.'%')
                ->orWhere('nickname', 'like', '%'.$keyword.'%');
        }
        $interviews = $query->paginate(20);

        return view('interviews.manage_posts',['interviews' => $interviews]);
    }
}
