var D=require('../utility/utility');
var read=require('readline-sync');
console.log("enter the day,month,year")
var month=process.argv[3]
var day=process.argv[2]
var year=process.argv[4]

console.log(day+"-"+month+"-"+year)
var s=D.dayOfWeek(day,month,year)
var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
        if (s <= res.length) {
            console.log("The day falls on :" + res[s])
        }
        else {
            console.log("Invalid day ")

            //return d0
        }