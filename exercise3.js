/**
 * Created by PhpStorm.
 * User: Pardeep K. Singhal (pardeepsingal1@gmail.com)
 * Date: 12 Aug 2018
 * Time: 11:32 PM
 */

// var int_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var int_array = [9,5,3,2,8,14,5,7,3,11,12];
int_array.sort(function(a, b){return a-b});

var max = int_array.length-1;
var i,a,b;

for (i = max; i > 0; i--) {
    if(i !== max)
    {
        a = parseInt(int_array[i]);
        b = parseInt(int_array[max]);
        var sum = a+b;
        if (sum%2 == 0)
        {
            document.write(sum);
            break;
        }
    }
}

// Results Output are attached