var S=require('../utility/utility')
var D=require('../utility/utilityDataStructure')
var suit = ["♣️", "🔸", "❤️", "♠️"];
var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var cards = suit.length * rank.length;
var cardarr = []
for (let i = 0; i < suit.length; i++) {
    for (let j = 0; j < rank.length; j++) {
        var temp = "";
        cardarr.push(temp + rank[j] + suit[i])
    }
}
for(let i=0;i<cards;i++)
{
    var num=Math.floor(Math.random()*cards)
    var temp=cardarr[i]
    cardarr[i]=cardarr[num]
    cardarr[num]=temp
}

var Player1=new D.QueueLinked
var Player2=new D.QueueLinked
var Player3=new D.QueueLinked
var Player4=new D.QueueLinked
for(let i=0;i<cardarr.length;i++)
{
    if(i>=0 && i<13)
    Player1.enqueue(cardarr[i])
    else if(i>=13 && i<26)
    Player2.enqueue(cardarr[i])
    else if(i>=26 && i<39)
    Player3.enqueue(cardarr[i])
    else 
    Player4.enqueue(cardarr[i])
}
var data=Player1.print()
var arr=data.split(" ")
var arr10=S.bubbleSort(arr)

var data1=Player2.print()
var arr1=data1.split(" ")
var arr11=S.bubbleSort(arr1)

var data2=Player3.print()
var arr2=data2.split(" ")
var arr12=S.bubbleSort(arr2)

var data3=Player4.print()
var arr3=data3.split(" ")
var arr13=S.bubbleSort(arr3)
