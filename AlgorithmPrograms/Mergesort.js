var D=require('../utility/utility');
/**
 * import the Utility class to use the functionalities.
 */

var read=require('readline-sync');
var num=read.questionInt("enter the size of array : ")
var arr=[];
while(num!=arr.length)
{
    var number=read.questionInt("enter the array elements : ")
    arr.push(number)
}
var l=0;
var h=arr.length;
function Merge(){
    
    D.mergeSort(arr)
    console.log("Merge sorted result ",arr);
    }
    Merge();
 