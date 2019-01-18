class swamy{
    constructor(name)
    {
        console.log("in swamy con")
        this.name="swamy"
    }
    do(){
        
        console.log("swamy output banthu")
    }
}
class arun{
    constructor(name){
        console.log("in arun con")
    }
   
    d(){
        console.log("in d of arun fun")  
        var sw=new swamy()
        sw.do()
      }
}
console.log("swafh")
var s=new arun()
s.d();

