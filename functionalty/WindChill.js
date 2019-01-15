var D=require('../utility/utility');
var read=require('readline-sync');
console.log("pls enter the tem less then 50 or speed between 3,120")  
var temp=read.questionFloat("enter the value of  temperature less then 50 ")
var speed=read.questionFloat("enter the wind speed between 3,120")
D.determinationOfWindChill(temp,speed)