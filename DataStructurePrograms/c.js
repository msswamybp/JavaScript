var D=require('../utility/utilityDataStructure')
var D=require('../utility/utilityCalendar');
var weekdays=new D.QueueLinked
var =new D.QueueLinked
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