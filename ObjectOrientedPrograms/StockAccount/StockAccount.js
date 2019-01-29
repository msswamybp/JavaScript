var read=require('readline-sync')
var file=require('fs')
class StockAccount{
    constructor(){

    }
    stock(data){
        var name1=read.question("enter name :")
        var id1=Math.floor(Math.random()*100)
        data.customer.push(
            {
                name:name1,
                id:id1

            }
        )
        var d = file.writeFileSync('customer.json', JSON.stringify(data))



    }
    valueof(){

    }
    buy(amount,symbol)
    {

    }
    sell(amount,symbol){

    }
    save(filename){

    }
    print(){

    }
}
module.exports={StockAccount}