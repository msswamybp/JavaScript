var D=require('../utility/utilityDataStructure')
var M=require('../utility/utilityCalendar');
var N=require('../utility/utility')
var T=require('util')
var read=require('readline-sync')
var weekdays=new D.StackLinkedList
var dateq=new D.StackLinkedList
var month=read.questionInt("enter the month :")
var year=read.questionInt("enter the year :")
var d=M.dayOfWeek(1,month,year)
console.log(d)
var res = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "sat"];

if (d <= res.length) {
    console.log("The day falls on :" + res[d])
}
var days=M.monthof(month)
var t1=N.findLeapyear(year)
if(t1){
    if(month==2)
    {
        days=29;
    }
}
for(let i=res.length-1;i>=0;i--)
{
    weekdays.push(res[i])
}
console.log(weekdays.print())
for(let i=days;i>=1;i--)
{
    dateq.push(i)
}
for(let i=0;i<res.length;i++)
{
    T.print(weekdays.pop()+"  ")
}
console.log()
for (let i=0;i<(d*5);i++)
{
    T.print(" ")
}
for(let i=1;i<=days;i++)
{
   
    if(i<10)
    {
        T.print(" "+dateq.pop()+"   ")
    }
    if(i>9)
    {
        T.print(""+dateq.pop()+"   ")
    }
    if((d+i)%7==0)
    {
        console.log()
    }
}
