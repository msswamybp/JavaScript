var Utility=require('../utility/utility');
var readline=require('readline-sync');
function binWord()
{
  var res=Utility.fileCall();
  var res1=res.sort();
  
  // console.log(arr);
  console.log(res1+" in sorted ");
   var target;
   var target=readline.question("Enter the word do you want to search ");
  var high=res1.length-1;
   var low=0;
   var time=Utility.Stopwatchmill()
   var ab=Utility.binarySearchWord(res1,low,high,target);
var time1=Utility.Stopwatchmill()
var totaltime=time1-time;
console.log(totaltime+" millesecond taken to exicute ")
  if(ab!=undefined)
  console.log("your word present in file");
  else
  console.log("your word not present in file")

}
binWord();