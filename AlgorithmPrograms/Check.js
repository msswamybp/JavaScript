var D=require('../utility/utility');
var read=require('readline-sync')
var low=read.questionInt("enter starting number:")


var apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}
var a={
    
    ss(){
console.log(apple.color)
console.log(apple.getInfo());

}
}
var aa=new a()
aa.ss()

