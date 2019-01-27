class Stocks{
    constructor(sname,sprice,q){
        this.stockname=sname
        this.stockprice=sprice
        this.quntity=q
        
    }
}


module.exports = {Stocks,
    regex(name, fname, pnum, date) {
        var fileread = require('fs')
        var line = fileread.readFileSync('Regex.txt', 'utf8')
        console.log(line)
        line = line.replace(/shiva/g, name);
        line=line.replace(/sathyadarma/g,fname);
        line=line.replace(/xxxxxxxxxx/g,pnum)
        line=line.replace(/xx-xx-xxxx/g,date)
        console.log()
        console.log()
        console.log(line)

    },
    stockReport()
    {
        
    }
}
