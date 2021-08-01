<?php

namespace App\Model\Interviews;

use Illuminate\Database\Eloquent\Model;

class Interview extends Model
{
    //テーブル名
    protected $table = 'interview';
    public function user()
	{
		return $this->belongsTo('App\Model\User');
	}

    protected $dates = ['display_date'];

    protected $fillable = [
		'name',
		'nickname',
        'profile',
        'sport',
		'content',
	];
}
