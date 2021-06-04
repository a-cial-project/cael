<head>
  <link rel="stylesheet" href="{{ asset('css/Chats/show.css') }}">
</head>

@extends('layouts.app')

@section('content')
<div class="container">
  <div id="all_message">
    @foreach($messages as $message)
      @if($message->user_id == Auth::user()->id)
        <div class="row my_message"><p>{{ $message->message }}</p></div>
      @else
        <div class="row other_message"><p>{{ $message->message }}</p></div>
      @endif
    @endforeach
  </div>
</div>
 <!-- 送信フォーム -->
<form enctype="multipart/form-data" action="" method="POST" class="form-horizontal">
{{ csrf_field() }}
<input type="hidden" name="room" id="room_id" value="{{ $room }}">
<input type="hidden" name="user" id="user_id" value="{{Auth::user()->id}}">
 <!-- postで送る時は必ず {{ csrf_field() }}をつける。セキリュティを上げる為のトークンとして利用 -->
<div class="form-group">
<div class="col-sm-6">
 <textarea name="message"  cols="30" rows="10"  class="form-control" placeholder="入力してください" id="message"></textarea>
 <i class="fas fa-paperclip"></i>
 </div>
 </div>
 <!-- 登録ボタン -->
<div class="form-group">
 <div class="col-sm-offset-3 col-sm-6">
 <button type="button" class="btn btn-primary" id="submit">投稿</button>
</form>

<script type="module" src="{{ mix('js/pusher.js') }}"></script>
@endsection