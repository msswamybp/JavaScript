var D=require('../utility/utility');
/**
 * import the Utility class to use the functionalities.
 */

var read=require('readline-sync');
var num=read.questionInt("enter the size of array : ")
var arr=[];
while(num!=arr.length)
{
    var number=read.question("enter the array elements : ")
    arr.push(number)
}
D.bubbleSort(arr)