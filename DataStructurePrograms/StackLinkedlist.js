var D=require('../utility/utilityDataStructure')
var s=new D.StackLinkedList
var arr=D.anagramAndPrime()
console.log(arr)
for(let i=0;i<arr.length;i++)
{
    s.push(arr[i])
}
console.log(s.getSize()+"  numbers are prime and anagrams")
console.log(s.print())
var s2=""
var data=s.pop()
console.log(data+"   hjghjgyhj")
for(let i=0;i<arr.length;i++)
{
    var a=s.pop()
   
}

console.log(s.print())
