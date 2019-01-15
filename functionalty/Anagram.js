var D=require('../utility/utility');
var read=require('readline-sync');
var str=read.question("enter the 1st word ")
var str1=read.question("enter the 2nd word ")
D.checkWordsAreAnagram(str,str1)