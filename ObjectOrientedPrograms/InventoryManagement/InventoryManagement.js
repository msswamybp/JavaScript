var D=require('../../ObjectOrientedPrograms/Oppsutility')
var readfile=require('fs')
var data=readfile.readFileSync('Stock.json','utf8')
var data1=JSON.parse(data)
var read=require('readline-sync')
//console.log(data)
D.inventoryManagement(data1)