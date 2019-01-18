var D=require('../utility/utility');
var read=require('readline-sync')
var low=read.questionInt("enter starting number:")
var high=read.questionInt("enter last number:")
var n=D.toFindNumber(low,high,read)
console.log("your number is :"+n)
