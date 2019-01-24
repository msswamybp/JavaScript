class Dequeue
{
    constructor()
    {
        this.front=-1;
        this.size=0
        this.back=0;
        this.head=null
    }
    addFront(data)
    {
        var n=new Node(data)
        if(this.head==null)
        {
            this.head=n
            this.size++
        }
        else{
            var temp=this.head
            while(temp.next)
            {
                temp=temp.next
            }
           temp.next=n
            this.size++
        }

    }
    removeFront(){
        if(this.head==null){
            console.log("Stack underflow");
            return null;
        }
        else{
            var temp=this.head
            var data=temp.data
            this.head=temp.next
            this.size--
            return data
            
        }
    }
    
    removeRear(){
        if(this.head==null){
            console.log("Stack underflow");
            return null;
        }
        var curr=this.head;
        var pre=this.head;
        if(curr.next==null){
            this.head=null;
            return curr.data;
        }
        while(curr.next){
            pre=curr;
            curr=curr.next;
        }
        var data=curr.data
        pre.next=null;
        this.size--;
    return data
    }
    print()
    {
        var st=""
        var temp=this.head
        while(temp)
        {
            console.log(temp.data)
            st=st+" "+ temp.data
            temp=temp.next
        }
        return st
    }
}
class Node {

    constructor(data) {
        this.data = data
        this.next = null
    }

}
module.exports={Dequeue}