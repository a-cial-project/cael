<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Model\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function usersearch(Request $request)
  {
    $users = [];
    $users[] = User::where('name', 'like', '%' . $request->value . '%')->orderBy('created_at', 'desc')->get();
    $users[] = 'user';
    return $users;
  }

  // public function usersearch(Request $request)
  // {
  //   $url = parse_url(url()->previous());
  //   $path = explode("/", $url['path']);
  //   $judgepath = end($path);
  //   if($judgepath == 'user' || ($judgepath == 'usersearch' && $request->isMethod('post'))){
  //     $users = User::where('name', 'like', '%' . $request->user . '%')->get();
  // 	  return response()->json($users);
  //   }elseif(empty($judgepath) || ($judgepath == 'usersearch' && $request->isMethod('get'))){
  //     $users = User::where('name', 'like', '%' . $request->user . '%')->paginate(2);
  //     return view('users.index',['users' => $users]);
  //   }
  // }

  public function show($id)
  {
  	$user = User::find($id);
    return view('users.show',['user' => $user]);
  }

  public function create()
  {
  	return view('users.create');
  }

  public function store(Request $request){
    try{
      if(Auth::user()->role == 0){
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->birth = $request->birth;
        $user->join = $request->join;
        $user->nickname = $request->nickname;
        $user->profile = $request->profile;
        $user->role = $request->role;
        $user->password = Hash::make($request->password);
        $user->save();
      }
    } catch (Throwable $e) {
      report($e);
      return false;
    }
  }

  public function edit($id)
  {
    if($id == Auth::user()->id || Auth::user()->role == 0){
      $user = User::find($id);
      return view('users.edit',['user' => $user]);
    }
  }

  public function update(Request $request)
  {
    $user = User::find($request->userId);
    try{
      if(Auth::user()->role == 0){
        $user->role = $request->role;
      }elseif(Auth::user()->id == $request->id){
        $user->name = $request->name;
        $user->email = $request->email;
        $user->nickname = $request->nickname;
        $user->profile = $request->profile;
        $user->sport = $request->sport;
      }
      $user->save();
      return view('home');
    }catch (Throwable $e) {
      report($e);
      return false;
    }
  }

  public function editpassword($id)
  {
    if($id == Auth::user()->id){
      $user = User::find($id);
      return view('users.editpassword');
    }
  }

  public function updatepassword(Request $request)
  {
    $user = User::find(Auth::user()->id);
    if(Hash::check($request->now, $user->password)){
      if($request->new == $request->confirm){
        $user->password = Hash::make($request->new);
        $user->save();
        return view('home');
      }
      $error_new = '確認パスワードが一致しません。';
      return view('users.editpassword',['error_new' => $error_new]);
    }
    $error_now = '現在のパスワードが一致しません。';
    return view('users.editpassword',['error_now' => $error_now]);
  }
}
