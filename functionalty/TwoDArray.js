var D=require('../utility/utility');
var read=require('readline-sync');
var rows=read.questionInt("enter the row  size ")
var col=read.questionInt("enter the col  size ")

D.print2DArray(rows,col);