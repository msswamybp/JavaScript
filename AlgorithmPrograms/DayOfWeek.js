var D=require('../utility/utility');
var read=require('readline-sync');
console.log("enter the day,month,year")
var month=0
var day=0
var year=0
while((month<=0 || month>12) || (day<=0 || day>32) || year<=0)
{
    var month=read.questionInt("enter month:")
    var day=read.questionInt("enter date :")
    var year=read.questionInt("enter year :")

}
console.log(day+"-"+month+"-"+year)
D.dayOfWeek(day,month,year)