var D=require('../utility/ObjectOrientedPrograms')

var read = require('readline-sync')
var name=read.question("Enter name :")
while(!isNaN(name))
{
    name=read.question("Enter valid name:")
}
var fullname=read.question("Enter your fullname:")
while(!isNaN(name))
{
    fullname=read.question("Enter valid fullname:")
}
var phonenum=read.question("Enter contact number:")
while(isNaN(phonenum) || phonenum.length<10)
{
    phonenum=read.question("Enter valid contact number:")
}
console.log(phonenum)
var date=new Date()
var output=D.regex(name,fullname,phonenum,date)
console.log()
console.log(output)