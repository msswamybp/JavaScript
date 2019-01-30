var D = require('../../ObjectOrientedPrograms/InventoryManagement/aaaa')
var read=require('readline-sync')
var readfile = require('fs')
var data = readfile.readFileSync('Stock.json', 'utf8')
var data1 = JSON.parse(data)
//console.log(data1)
var read = require('readline-sync')
var object = new D.InventoryManager
console.log("enter 1 for add")
console.log("enter 2 for remove")
console.log("enter 3 for print")
console.log("enter 4 for exit")
var num =read.questionInt("Select the any number:")
switch (num) {
    case 1: object.add(data1)
        break;
    case 2: object.remove(data1)
        break;
    case 3: object.print(data1)
        break;
 

}