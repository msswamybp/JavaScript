var D=require('../../ObjectOrientedPrograms/A/Test1')
var file=require('fs')
var read=require("readline-sync")
var data=file.readFileSync('CliniqueManagement.json','utf8')
var object=JSON.parse(data)
var p=new D.Patient
var p1=new D.Doctors
console.log("Enter 1 to search patient")
console.log("Enter 2 to search Doctor")
console.log("Enter 3 to take appointment")
var number=read.questionInt("choice number:")
if(number==1){
    
    p.searchpatient(object)

}
if(number==2){
  
    p1.searchDoctor(object)
}
if(number==3)
{
p1.appointment(object)
    

}


