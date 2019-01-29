var D=require('../../ObjectOrientedPrograms/Oppsutility')
var file=require('fs')
var data=file.readFileSync('CliniqueManagement.json','utf8')
var object=JSON.parse(data)

D.cliniquemanagement(object)