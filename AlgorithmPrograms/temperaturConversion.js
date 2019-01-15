var D=require('../utility/utility');
var read=require('readline-sync');
var num=10;
console.log(num)
while(num!=0 && num!=1)
{
console.log("enter 0 for temperature in fahrenheit")
console.log("enter 1 for temperature in Celsius ")
var num=read.questionInt("enter the 0 or 1 ")
console.log("h")
}

D.temperaturConversion(num,read)
