var req=require('util')
var D=require('../utility/utilityDataStructure')
var arr=[["arr1"],["arr2"],["arr3"],["arr4"],["arr5"],["arr6"],["arr7"],["arr8"],["arr9"],["arr10"]]
var array=[5,55,66,77,88,99,110]
var x=0
var y=0
for(let i=0;i<arr.length;i++)
{
    var c=0;
    for(let j=0;j<array.length;j++)
    {
        var num=array[j]%10
        if(num==i)
        {
            arr[i][c]=num
            c++
        }
    }

}
console.log;
