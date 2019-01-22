var D=require('../utility/utilityDataStructure')
var M=require('../utility/utility')
var req=require('util')
var read=require('readline-sync')
var arr=M.fileCall()
var num=read.questionInt("enter number :")
var arr1=new Array(10);
for(let i=0;i<arr.length;i++)
{ 
    var num=Number(arr[i])
    var n=arr[i]%10
    if(arr1[n]===undefined)
    {
        arr1[n]=new D.LinkedList
        arr1[n].add(num)
    }
    else
    {
        arr1[n].add(num)
    }
    
}
for (let i = 0; i < arr1[i].length; i++) {
  
    for (let j = 0; j < arr1[i].length; j++) {
        req.print(arr1[i][j]);
        if (j == 0) {
            req.print(" => ");
        } else {
            if (j != arr1[i].length - 1)
                req.print(",")
        }
    }
    console.log();
}