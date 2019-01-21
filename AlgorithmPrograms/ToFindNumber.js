var D=require('../utility/utility');
var read=require('readline-sync')
var N=process.argv[2]
var n=D.toFindNumber(0,N-1,read)
console.log("your number is :"+n)
