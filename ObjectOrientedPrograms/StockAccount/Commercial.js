var D=require('../../ObjectOrientedPrograms/StockAccount/StockAccount')
var read=require('readline-sync')
var file=require('fs')
var data=file.readFileSync('customer.json','utf8')
var object=JSON.parse(data)
console.log(object)
var object1=new D.StockAccount
console.log("Enter 1 to create account:")
var num=read.question("select your number")
if(num==1)
{
object1.stock(object)
}
