var access = require('../utility/utilityDataStructure');
var readline = require('readline-sync');
var take = require('util');
var filestream = require('fs');
var utility = require('../utility/utility');
function hashing() {
    var f = filestream.readFileSync('hashnumber.txt', 'utf8');
    var num = f.split(' ');
    var arr = []
    var remainder, n;

    for (let i = 0; i < num.length; i++) {
        n = Number(num[i]);
        remainder = n % 10;

        if (arr[remainder] === undefined) {
            arr[remainder] = new access.LinkedList;
            arr[remainder].add(n);
        } else {
            arr[remainder].add(n);

        }
    }
    var str = "";
    for (let index = 0; index < 10; index++) {
        take.print(index + " slot=> ");
        try {
            arr[index].print();

        } catch (err) {
            console.log("empty index");
        }

    }
    console.log()
    var number = readline.question(' Enter the number you want to search \n');
    if (!isNaN(number)) {
        remainder = Number(number % 10);
        console.log(remainder);
        if (arr[remainder] === undefined) {
            arr[remainder] = new access.LinkedList;
        }
        if (arr[remainder].contain(Number(number))) {
            console.log("The number is found in file");
            arr[remainder].remove(number);

        } else {
            console.log("Number is not found in file");
            arr[remainder].add(number);
        }
        var flag;
        for (let index = 0; index < 10; index++) {
            flag = true;
            take.print(index + " result slot=>");
            try {
                //arr[index].print();
                str = str + arr[index].print();
                if (arr[index] !== 'undefined' && index < arr.length - 2) {
                    str = str + " ";
                }
            } catch (err) {
                console.log("Empty index");

            }

        } console.log(str);
        utility.writeFile('hashingNumber.txt', str);

        console.log("\n\n");
    } else {
        console.log("Wrong input ");
    }

}
hashing();