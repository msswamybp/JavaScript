var D=require('../utility/utility');
var read=require('readline-sync');
var num=10;
while(num!=0 && num!=1)
{
console.log("1.Celsius to Fahrenheit\n2.Fahrenheit to Celsius")
var num=read.questionInt("Choose option:")
}
D.temperaturConversion(num,read)
