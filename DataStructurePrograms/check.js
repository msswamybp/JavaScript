var D = require('../utility/Queueutility')
var readline = require('readline-sync')
function Queue() {
    var q = new D.Queue;
    var q1 = new D.Queue;
    var bankamount = 3000;
    var temp = 0
    var c = 0;
    var flag = true
    var l = readline.questionInt("Enter the total number of people :")
    for (let i = 1; i <= l; i++) {
        if (l > 0) {
            var s = readline.questionInt("\n 0. for deposition \n 1. for withdraw \n Enter your choice:\t\n")
            if (s == 0) {
                var amount = readline.questionFloat("enter the amount to deposition")
                q.enque(amount)
            }
            else if (s == 1) {
                for (let i = 1; i <= l; i++) {
                    bankamount = bankamount + q.deque()
                }

                var amount = readline.questionFloat("enter the amount to withdraw")
                if (amount >= bankamount) {
                    console.log(bankamount+" ggggggggggg")
                    c++
                    temp = amount
                    q1.enque(-amount)
                }
                else {
                    console.log(bankamount+" ffffffffffffff")
                    q.enque(-amount)
                }
            }
            else
                flag = false
        }

    }
    if (flag) {
        for (let i = 1; i <= l; i++) {
            bankamount = bankamount + q.deque()
        }
        for (let i = 1; i <= c; i++) {
            bankamount = bankamount + q1.deque()
        }
        if (bankamount >= 0) {
            console.log("maintain the cash balance")
        }
        else {
            console.log("not maintain the cash balance")
        }
    }
    else
        Queue()
}
Queue()

