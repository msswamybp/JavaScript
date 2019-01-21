var D=require('../utility/utility');
var read=require('readline-sync');
console.log("enter the day,month,year")
var month=process.argv[3]
var day=process.argv[2]
var year=process.argv[4]

console.log(day+"-"+month+"-"+year)
D.dayOfWeek(day,month,year)