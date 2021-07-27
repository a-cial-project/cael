<?php
namespace App\Enums;

use BenSampo\Enum\Contracts\LocalizedEnum;
use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class MemoStatus extends Enum
{
	const privacy = 0;
	const relase = 1;

	public static function getStatus($value): string
	{
		switch ($value){
			case 'relase':
				return '公開';
				brake;
			case 'privacy':
				return '非公開';
				brake;
			default:
				return self::getKey($value);
		}
	}
}
