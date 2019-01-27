var D = require('../utility/ObjectOrientedPrograms')
var read = require('readline-sync')
var num = read.questionInt("Enter the number Stock:")
var i=0
while(i<num) {
    var name = read.question("Enter Stock name:")
    var price = read.questionInt("Enter Stock Price:")
    var quntity = read.questionInt("Enter Stock Quntity:")
    i = new D.Stocks(name, price, quntity)
    i++

}