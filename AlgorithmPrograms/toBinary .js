var D=require('../utility/utility');
var read=require('readline-sync');
var num=read.questionInt("enter number :")
var b=D.toBinary(num)
console.log(b)