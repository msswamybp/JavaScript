var D=require('../../ObjectOrientedPrograms/Oppsutility')
var M=require('../../ObjectOrientedPrograms/ADDress/Address')
var file=require('fs')
var data1=file.readFileSync('Address.json','utf8')
var data=JSON.parse(data1)
var object=new M.AddressBook
object.address(data)
