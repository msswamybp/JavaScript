var A=require('../utility/utility');
var read=require('readline-sync');
var name=read.question("enter the name  ");
while(name.length<3)
{
    var name=read.question("enter the name  ");
}
A.replaceString(name);