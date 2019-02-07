class Stock {
    constructor(name, numberofshare, shareprice) {

        this.name = name,
            this.numberofshare = numberofshare,
            this.shareprice = shareprice
    }
    shareprice() {
        return this.numberofshare * this.shareprice;
    }

}
module.exports = {
    Stock,
    stockReport(object) {
        var stock = object.Stock
        var totalstock = 0
        for (var key in stock) {
            console.log()
            console.log("The total value of ", stock[key].stockname, " share is ", stock[key].numberofshare * stock[key].shareprice);
            var num = stock[key].numberofshare * stock[key].shareprice
            console.log(num)
            totalstock = totalstock + num
        }
        console.log()
        console.log("value of total stocks:" + totalstock)

    }
}