var D=require('../utility/utilityDataStructure')
var s=new D.QueueLinked
var arr=D.anagramAndPrime()
console.log(arr)
for(let i=0;i<arr.length;i++)
{
    s.push(arr[i])
}
console.log(s.getSize()+"  numbers are prime and anagrams")
console.log(s.print())