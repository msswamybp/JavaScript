var D=require('../utility/utility');
var read=require('readline-sync');
var num=read.questionInt("enter the size of array : ")
var arr=[];
while(num!=arr.length)
{
    var number=read.questionInt("enter the array elements : ")
    arr.push(number)
}
D.insertionSort(arr)