var D=require('../utility/utilityCalendar');
var M=require('../utility/utility')
var T=require('util')
function cal()
{
var month=+process.argv[2]
var year=+process.argv[3]
var d=D.dayOfWeek(1,month,year)
console.log(d)
var res = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "sat"];
if (d <= res.length) {
    console.log("The day falls on :" + res[d])
}
var days=D.monthof(month)
var t1=M.findLeapyear(year)
if(t1){
    if(month==2)
    {
        days=29;
    }
}
for(let i=0;i<res.length;i++)
{
    T.print(res[i]+"  ")
}
console.log()
console.log();
    for (var i = 0; i < (d * 5); i++) {
        T.print(" ");
}
for(let i=1;i<=days;i++)
{
    if (i < 10) {
        T.print("  " + i + "  ");
    }

    if (i > 9) {
        T.print(" " + i + "  ")
}
    if((i+d)%7==0)
    {
        console.log()
    }
}

}
cal()