var a1=71
var b1=[]
var a=a1+""
var b=a.split("")
b.sort()
console.log(b)
var v=""
for(let i=0;i<b.length;i++)
{
    v=v+b[i]
}
console.log(v+"  jhg")
if(!b1.includes(v))
{
b1.push(v)
}
console.log(b1)