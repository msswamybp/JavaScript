var D=require('../utility/utilityDataStructure')
var M=require('../utility/utility')
var read=require('readline-sync')
function Stack(){
var stack=new D.Stack;

var str=read.question("Enter Arithmetic Expression :")

for(let i=0;i<str.length;i++)
{
    var c=str.charAt(i)
    if(c=='(' || c=='['|| c=='{')
    {
        stack.push(c);
    }
    else
    switch(c)
    {
        case ')':if(stack.pop()!='(')
        {
            return false
        }
        break;
        case ']':if(stack.pop()!=']')
        {
            return false
        }
        break;
        case '{':if(stack.pop()!='}')
        {
            return false
        }
        break;
    }

}
if(stack.size==0){
    return true;
    }
    return false;
 }
 var bol=Stack();
 
 
 if(bol){
     console.log("String is balanced");
     
 }
 else{
     console.log("Not balanced");
     }
 