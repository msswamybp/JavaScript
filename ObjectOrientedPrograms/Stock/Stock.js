var D =require('../StockReport1')
var fileread=require('fs')
var data=fileread.readFileSync('Stock.json','utf8')
var object=JSON.parse(data)
var sum=0
var d=object.Stock
for(let i in d){
    var name=d[i].stockname;
    var numberofshare=d[i].numberofshare;
    var shareprice=d[i].shareprice;
    var total=numberofshare*shareprice
    console.log("The total value of ", d[i].stockname, " share is ", d[i].numberofshare * d[i].shareprice);
    sum=sum+total
    i=new D.Stock(name,numberofshare,shareprice)
  // var d=i.shareprice()
   
     
}
console.log("value of total stocks:" + sum)

//D.stockReport(object)
//var o=new D.Stock
//o.shareprice()