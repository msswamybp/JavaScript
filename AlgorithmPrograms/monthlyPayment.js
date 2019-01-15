var D=require('../utility/utility');
var read=require('readline-sync');
var Y=read.questionFloat("enter year from :")
var R=read.questionFloat("enter percent interest compounded monthly")
var P=read.questionFloat("enter principal loan amount")
D.monthlyPayment(Y,R,P)