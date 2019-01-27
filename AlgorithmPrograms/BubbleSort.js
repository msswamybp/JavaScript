/************************************************************
 * Execution    :   1. cmd> node BubbleSort.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon BubbleSort.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   Sort the Interger values passed by user in the console.
 * 
 * @description
 * 
 * @file        :   BubbleSort.js
 * @overview    :   Read all Interger values passed by user and Sort the numbers and Print.
 * @author      :   Marulasiddaswamy B P <msswamybp@gmail.com>
 * @version     :   1.0
 * @since       :   14-01-2019
 * 
 * **********************************************************/        

 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
var D=require('../utility/utility');

/**
 * import the Utility class to use the functionalities.
 */

var read=require('readline-sync');
var num=read.questionInt("enter the size of array : ")
var arr=[];
while(num!=arr.length)
{
    var number=read.questionInt("enter the array elements : ")
    arr.push(number)
}
//var res=D.fileCall();
var time=D.Stopwatchmill()
D.bubbleSort(arr)
var time1=D.Stopwatchmill()
var totaltime=time1-time;
console.log(totaltime+" millesecond taken to exicute ")