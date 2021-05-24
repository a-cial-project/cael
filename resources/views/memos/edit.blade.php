<head>
  <link rel="stylesheet" href="{{ asset('css/Memos/create.css') }}">
</head>
@extends('layouts.app')

@section('content')

  <div class="container">
  	<h3 style="text-align: center;" class="mb-5">投稿してたくさんの仲間を呼ぼう！</h3>
    <form action="{{ route('memo.update', ['memo' => $memo->id])}}" method="post" name="my_form">
      <div class="input">
      @method('put')
      @csrf
        <!-- memo部分 -->
        <input type="hidden" name="memo_id" value="{{ $memo->id }}" class="row offset-4 col-4 mb-5">
        <input type="text" name="memo_name" value="{{ $memo->name }}" class="row offset-4 col-4 mb-5">
        <p id="hide" style="display: none;">{{ $memo->memo_category_id }}</p>
        <select class="row offset-4 col-4 mb-5" id="category_id" name="category_id">
        	<option value="0">ここには無い</option>
    	    @foreach($categories as $category)
    	      <option value="{{ $category->id }}">{{ $category->name }}</option>
    	    @endforeach
        </select>
        <input type="text" name="new_category" id="category" placeholder="新しいカテゴリーを追加" class="row offset-4 col-4 mb-5">
        <select class="row offset-4 col-4 mb-5" name="status">
          <option selected value="privacy">非公開</option>
          <option value="relase">公開</option>
        </select>

        <!-- section部分 -->
        <div class="section_create_form">
          @foreach($memo->sections as $sectioncount => $section)
          <input type="text" name="section_id[{{ $section->id }}]sectiontitle[]" placeholder="セクションのタイトル" class="row offset-4 col-4 mb-5 sectiontitle" value="{{ $section->title }}">
            <div class="sectionput" >
              @foreach($section->section_contents->sortBy('order') as $contentcount => $content)
                <div class="parentcontent mb-5">
                  @if(isset($content->code))
                    <textarea name="section[{{$sectioncount+1}}][{{$contentcount+1}}][section_id][{{$content->id}}][section_code]" data-id="{{$content->id}}" data-sectioncount={{$sectioncount+1}} data-contentcount={{$contentcount+1}} class="row col-12 content code">{{ $content->code }}</textarea>
                  @elseif(isset($content->content))
                    <textarea name="section[{{$sectioncount+1}}][{{$contentcount+1}}][section_id][{{$content->id}}][section_content]" data-id="{{$content->id}}" data-sectioncount={{$sectioncount+1}} data-contentcount={{$contentcount+1}} class="row col-12 content blog">{{ $content->content }}</textarea>
                  @endif
                </div>
              @endforeach
            </div>

          <div class="row mb-5 add_btn">
            <button type="button" class="sectionBtn btn btn-primary col-2">コンテンツを追加</button>
          </div>

          <div class="fix hidden my-5 col-9 offset-2">
            <button type="button" class="btn btn-primary col-3" data-sectioncount={{$sectioncount+1}} data-addelement="code">コードを追加</button>
            <button type="button" class="btn btn-primary col-3" data-sectioncount={{$sectioncount+1}} data-addelement="blog">ブログを追加</button>
            <button type="button" class="btn btn-primary col-3" data-sectioncount={{$sectioncount+1}} data-addelement="image">画像を追加</button>
            <h1 data-addelement="no">×</h1>
          </div>

          @endforeach
          <button type="button" id="addSectionBtn" class="btn btn-primary col-2 mr-2">セクションを追加</button>
        </div>
        <div class="posting">
          <button type="button" id="confirmBtn" class="btn btn-primary row offset-5 col-2">確認画面へ</button>
        </div>
      </div>

      <div class="container confirm hidden">
        <div class="submitarea">
          <button type="button" id="returnBtn" class="btn btn-primary col-2">戻る</button>
          <button type="submit" id="submitBtn" class="btn btn-primary row offset-5 col-2">投稿する</button>
        </div>
      </div>

    </form>
  </div>

<script type="module" src="{{ mix('js/prettify.js') }}"></script>
<script type="module" src="{{ mix('js/sectionEdit.js') }}"></script>
<script type="module" src="{{ mix('js/category.js') }}"></script>
@endsection
