var B=require('../utility/utility');
var read=require('readline-sync');
var stack=read.questionInt("enter the starting stack ")
var goal=read.questionInt("enter the goal ")
B.gambler(stack,goal);