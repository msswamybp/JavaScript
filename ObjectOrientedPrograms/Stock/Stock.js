var D =require('../../ObjectOrientedPrograms/Oppsutility')
var fileread=require('fs')
var data=fileread.readFileSync('Stock.json','utf8')
var object=JSON.parse(data)
D.stockReport(object)
