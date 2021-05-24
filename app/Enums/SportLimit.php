<?php

namespace App\Enums;

use BenSampo\Enum\Contracts\LocalizedEnum;
use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class SportLimit extends Enum
{
  const UnderRecruitment = 0;
  const End = 1;

  public static function getStatus($value): string
  {
    switch ($value){
      case 'UnderRecruitment':
        return '募集中';
        brake;
      case 'End':
        return '終了';
        brake;
      default:
        return self::getKey($value);
    }
  }
}
