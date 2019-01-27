var filestream = require('fs');
var pass = require('../ObjectOrientedPrograms/Oppsutility');
var data = filestream.readFileSync('Inventory.json');
var object = JSON.parse(data);
function Inventory() {
    pass.inventory(object);
    var st=JSON.stringify(object)
    console.log()
    console.log(st)
}
Inventory();