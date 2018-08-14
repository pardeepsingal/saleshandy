<?php
/**
 * Created by PhpStorm.
 * User: Pardeep K. Singhal (pardeepsingal1@gmail.com)
 * Date: 12 Aug 2018
 * Time: 11:32 PM
 */

$index = 3;
$array = [1, 2, 3, 1, 4, 5, 1, 2, 3, 1, 8, 5];
for ($i = 0; $i < count($array); $i++) {
    $isExist = false;
    $j=$i+$index;
    for($j;$j<count($array);$j=$j+$index)
    {
        if(isset($array[$j]) && $array[$i] == $array[$j])
        {
            $isExist = true;
        }else{
            $isExist = false;
            break;
        }
    }
    if($isExist)
    {
        echo $array[$i];
    }
}



