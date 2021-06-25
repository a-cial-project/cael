<?php

namespace App\Model;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\CanResetPassword;

class User extends Authenticatable
{
  use Notifiable;

  public function sportcomments()
  {
    return $this->hasMany('App\Model\Sports\SportComment');
  }

  public function engineercomments()
  {
    return $this->hasMany('App\Model\Engineers\EngineerComment');
  }

  public function memos()
  {
    return $this->hasMany('App\Model\Memos\Memo');
  }

  public function messages()
  {
    return $this->hasMany('App\Model\Chats\Message');
  }

  public function rooms()
  {
    return $this->hasMany('App\Model\Chats\Room');
  }

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'name', 'email', 'birth', 'join', 'nickname', 'profile', 'sport', 'image', 'role',
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
      'password', 'remember_token',
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
      'email_verified_at' => 'datetime',
  ];
}
