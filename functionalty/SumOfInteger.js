var D=require('../utility/utility');
var read=require('readline-sync');
var number=read.questionInt("enter the number: ")
var arr=[];
while(arr.length!=number)
{
   
    var num=read.questionInt("enter the arrya element ")
    
    arr.push(num)
   

}
console.log(arr)
D.sumOfInteger(arr);