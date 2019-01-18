
class Node {

    constructor(data) {
        // console.log(data+" in node")
        this.data = data
        this.next = null
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
        console.log(data1 + " in data")
        console.log(data1 + " jhjh")
        var c = 0;
        if (this.head == null)
            console.log("list is empty")
        else {
            var temp = this.head
            while (temp.next) {
                if (temp.data == data1) {
                    console.log("hi " + data1)
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
    insert(pos, data) {
        if (pos < 0 && pos > this.size)
            return false
        else {
            var node = new Node(data)
            if (pos == 0) {
                node.next = this.head
                this.head = node
            }
            else {
                var temp = this.head
                var t = 0
                while (t < pos) {
                    t++
                    temp = temp.next
                }
                node.next = temp
                temp = node
            }
        }


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
        return st
    }
}

//module.exports={LinkedList}
module.exports = { LinkedList, Stack }

