var D=require('../../ObjectOrientedPrograms/Oppsutility')
var file=require('fs')
var data1=file.readFileSync('AddressBook.json','utf8')
var data=JSON.parse(data1)

D.address(data)