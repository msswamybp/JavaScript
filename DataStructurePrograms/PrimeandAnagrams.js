var req = require('util');
var utility = require('../utility/utility');
var array = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
var array1 = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
var i = 0; var j = 1; var range = 100;
var arr = []
var arr1 = []
for (let prime = 2; prime <= 1000; prime++) {
    if (utility.isPrimeNumber(prime)) {

        if (prime <= range) {
            var a = "" + prime
            var b = a.split("")
            b.sort()
            var v = ""
            for (let i = 0; i < b.length; i++) {
                v = v + b[i]
            }
            if(!arr.includes(v))
            {
                arr.push(v)
            array[i][j] = prime;
            j++;
            }
           

        }
        else {
            var a1 = "" + prime
            var b1 = a1.split("")
            b1.sort()
            var v1 = ""
            for (let i = 0; i < b1.length; i++) {
                v1 = v1 + b[i]
            }
            if(!arr1.includes(v1))
            {
                arr1.push(v1)
            j = 1;
            range = range + 100;
            i++;
            array[i][j] = prime;
            }
            
        }
    }
}
console.log("The prime numbers that are not Anagram presents in the given range ");
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        req.print(array[i][j] + " ");
    }
    //utility.mark1(array)
    console.log();
}
console.log();
console.log("The prime numbers that are  Anagram presents in the given range ");
for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array1[i].length; j++) {
        req.print(array1[i][j] + " ");
    }
    //utility.mark1(array)
    console.log();
}
console.log();
