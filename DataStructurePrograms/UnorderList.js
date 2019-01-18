var D=require('../utility/utilityDataStructure')
var M=require('../utility/utility')
var read=require('readline-sync')
var word=read.question("enter word to be search in file:")
var arr=M.fileCall()
var l=new D.LinkedList;
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])+"ghjgjh"
    l.add(arr[i])
}
console.log(l+" in main")
var b=l.contain(word)
console.log(b)
if(b==true)
{
    l.remove(word)
    var output=l.print()
M.writeFile('aru.txt',output)
console.log(output)
}
else{
    l.add(word)
    var output=l.print()
M.writeFile('aru.txt',output)
console.log(output)
}

