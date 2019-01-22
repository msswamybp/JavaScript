var D=require('../utility/utilityDataStructure')
var s=new D.QueueLinked
var arr=D.anagramAndPrime()
console.log(arr)
for(let i=0;i<arr.length;i++)
{
    s.enqueue(arr[i])
}
console.log(s.getSize()+"  numbers are prime and anagrams")
console.log(s.print())
for(let i=0;i<arr.length;i++)
{
    s.dequeue(arr[i])
}
console.log(s.getSize()+"  numbers are prime and anagrams")
