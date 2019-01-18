var D=require('../utility/utilityDataStructure')
var M=require('../utility/utility')
var read=require('readline-sync')
var arr=M.fileCall()
//var arr=[10,8,5,5,10]
var l=new D.LinkedList;
console.log(arr+" in ")
var arr1=M.insertionSort(arr)
console.log(arr1+" ghh")
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])+"ghjgjh"
    l.add(arr[i])
}
var num=read.question("enter number to be search in file:")
var b=l.contain(num)
console.log(b)
if(b==true)
{
    l.remove(num)
    var output=l.print()
M.writeFile('aru.txt',output)
console.log(output)
}
else{
    console.log(arr)
    var p=l.addpos(arr,num)
    console.log(p+" which pos")
    l.insert(p,num)
    var output=l.print()
M.writeFile('aru.txt',output)
console.log(output)
}
