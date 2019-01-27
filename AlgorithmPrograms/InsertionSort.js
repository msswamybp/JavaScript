var D=require('../utility/utility');
var read=require('readline-sync');
var num=read.questionInt("enter the size of array : ")
var arr=[];
while(num!=arr.length)
{
    var number=read.questionInt("enter the array elements : ")
    arr.push(number)
}
//var res=D.fileCall();
var time=D.Stopwatchmill()
D.insertionSort(arr)
var time1=D.Stopwatchmill()
var totaltime=time1-time;
console.log(totaltime+" millesecond taken to exicute ")
