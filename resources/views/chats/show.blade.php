<head>
  <link rel="stylesheet" href="{{ asset('css/Chats/show.css') }}">
</head>

@extends('layouts.app')

@section('content')
  <div class="container">
    <div id="all_message">
      @foreach($messages as $message)
        @if($message->user_id == Auth::user()->id)
          <div class="row my_message mb-3">
            <h6>あなた</h6>
            @if(isset($message->message))
              <div class="message ml-auto">
                <p>{{ $message->message }}</p>
              </div>
            @elseif(isset($message->content))
              <div class="image_parent"><img src="{{ $message->content }}" class="content"></div>
            @elseif(isset($message->movie))
              <div class="image_parent"><video src="{{ $message->movie }}"  controls></video></div>
            @endif
          </div>
        @else
          <div class="row other_message mb-3">
            <h6>{{ $message->user->name }}</h6>
            @if(isset($message->message))
              <div class="message">
                <p>{{ $message->message }}</p>
              </div>
            @else
              <div class="image_parent"><img src="{{ $message->content }}" class="content"></div>
            @endif
          </div>
        @endif
      @endforeach
    </div>
     <!-- 送信フォーム -->
    <form enctype="multipart/form-data" action="" method="POST" class="form-horizontal">
      {{ csrf_field() }}
      <input type="hidden" name="room" id="room_id" value="{{ $room }}">
      <input type="hidden" name="user" id="user_id" value="{{Auth::user()->id}}">
     <!-- postで送る時は必ず {{ csrf_field() }}をつける。セキリュティを上げる為のトークンとして利用 -->
      <div class="col-sm-6">
        <textarea name="message"  cols="30" rows="10"  class="form-control" placeholder="入力してください" id="message"></textarea>
        <label for="image"><i class="fas fa-paperclip"><input type="file" id="image"></label></i>
        <i class="fas fa-paper-plane offset-11" id="submit"></i>
      </div>
     <!-- 登録ボタン -->

    </form>
  </div>

<script type="module" src="{{ mix('js/pusher.js') }}"></script>
@endsection