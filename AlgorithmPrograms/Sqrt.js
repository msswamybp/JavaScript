var D=require('../utility/utility');
var read=require('readline-sync')
var num=0
while(num<=0){
    var num=read.questionInt("enter nonnegative number")
}
D.sqrtNewtonsMethod(num)
