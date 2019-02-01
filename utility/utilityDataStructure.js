var T=require('util')
var req = require('util');
var utility = require('../utility/utility');
class Node {

    constructor(data) {
        this.data = data
        this.next = null
    }

}
class StackLinkedList{
    constructor(){
        this.size=0
        this.head=null

    }
    push(data)
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
    pop(){
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
    getSize()
    {
        return this.size
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
class Stack {
    constructor() {
        this.items = [];
        this.size = 0
        this.capacity
        this.top = -1
    }
    stack(capacity) {
        this.capacity = capacity
        var t = new items[capacity]
    }
    push(data) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++
        this.items[++this.top] = data
    }
    pop() {
        if (this.top == -1)
            console.log("stack is empty")
        this.size--
        return this.items[this.top--]
    }
    peak() {
        if (this.top == -1)
            console.log("stack is empty")
        else
            console.log(this.items[top])

    }
    getSize() {
        return this.size;

    }
    isempty() {
        if (size == 0)
            return true
        else
            return false

    }
    display() {
        var st = "";
        for (let i = 0; i < this.size; i++) {
            st = st + " " + items[i]
        }
    }
    reversStack(items) {
        var newstack = new Stack;
        var n = this.getsize();
        for (let index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;

    }
}
//module.exports={Node}
class QueueLinked{
    constructor(){
        this.size=0
        this.head=null

    }
    enqueue(data)
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
    dequeue(){
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
        getSize()
        {
            return this.size
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
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0

    }
    add(data) {
       
        var node = new Node(data)
        if (this.head == null) {
            this.head = node;
        }
        else {
            var temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = node
           
        }
        this.size++
    }
    contain(data1) {
        var c = 0;
        if (this.head == null)
            console.log("list is empty")
        else {
            var temp = this.head
            while (temp.next) {
                if (temp.data == data1) {
                    return true
                }
                else
                    temp = temp.next

            }
        }
        return false
    }
    addpos(arr, num) {
        console.log(num + "  in addpos")
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[0] >= num)
                return 0
            else if (arr[i] < num && arr[i + 1] > num) {
                return i + 1
            }
        }
        return arr.length
    }
    insertFirst(element){
        var n=new Node(element);
        if(this.head==null){
             this.head=n;
             this.size++;
             return;
        }else{
            n.next=this.head;
            this.head=n;
            this.size++;
            return;
        }
    }

    insert(index,element){
        var n=new Node(element);
        if(index==1){
            n.next=head.next
            head=n
            this.size++
        }
         if(this.head==null){
             return;
         }
         
         var c=1//pre=this.head,curr=this.head;
         var temp=this.head
         while(c<index)
         {
            
            temp=temp.next
             c++
         }
         n.next=temp.next
         temp=n
         this.size++
        
        }
    remove(data) {
        var temp = this.head
        var t = null
        while (temp != null) {
            if (temp.data == data) {
                if (t == null) {
                    this.head = temp.next
                }
                else {
                    t.next = temp.next
                }
                this.size--
                return temp.data
            }
            t = temp
            temp = temp.next
        }
        return -1
    }

    print() {
        var st = ""
        var temp = this.head
        while (temp) {
            st = st + " " + temp.data
            temp = temp.next
        }
        console.log(st)
        return st
    }
    printele(){
       
        var temp=this.head
        while(temp){
            var st=""
            st=st+"name: "+temp.data.name+", share:"+temp.data.share+",price: "+temp.data.price
            console.log(st)
            temp=temp.next
        }
    }
    getsize(){
        return this.size;
    }
}


module.exports = { LinkedList, Stack ,StackLinkedList,QueueLinked,
    print2DArray2(rows, col,arr1) {
        var arr = [];
        
        for (let i = 0; i < rows; i++) {
            arr.push([]);
            for (let j = 0; j < col; j++) {
                

                arr[i][j] = arr1[j]
                j++
            }
           // i=i+30
        }
        var arr1 = this.mark12(arr,rows,col);


    },
    mark12(arr,rows,col) {

        for (let i = 0; i < rows; i++) {
            var p = []
            for (let j = 0; j < col; j++) {
                p[j] = arr[i][j]
            }
          // console.log(p)
            //T.print(p)
        }
        return p

    },
    
    anagramAndPrime(){
        var arr = [];
        var arr2=[];
        var array = [["0-100 "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        for (let i = 2; i < 1000; i++) {
            if (utility.isPrimeNumber(i)) {
                arr.push(i);
        
            }
        }
        
        
        var range = 100, k = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (utility.checkNumberAreAnagram(arr[i],arr[j])) {
                    if (arr[i] <= range) {
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            
                            arr2.push(arr[i])
                            arr2.push(arr[j])
                            array[k].push(arr[j]);
                        }
                    } else {
                        range = range + 100;
                        k++;
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    }
                }
            }
        }
        console.log("The Number which are prime and anagram ");
        
        for (let i = 0; i < array.length; i++) {
          
            for (let j = 0; j < array[i].length; j++) {
                req.print(array[i][j]);
                if (j == 0) {
                    req.print(" => ");
                } else {
                    if (j != array[i].length - 1)
                        req.print(",")
                }
            }
            console.log();
           
        
        }
        return arr2
    },
binaryTree(num)
{
    var fact=1
    for(let i=1;i<=num;i++)
    {
        fact=fact*i
    }
    return fact
},
palindram(word)
{
    for(let i=0;i<arr.length;i++)
{
    d.addFront(arr[i])
}
var l=word.length/2
var m=Math.floor(l)
var c=0
while(c!=m)
{
    if(d.removeRear!=d.removeFront)
    return false;
    c++
}
return true;

}






}

