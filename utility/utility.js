module.exports={


replaceString(name){
var flag=true;
var input="Hello <<UserName>>, How are you?";
var output1=input.replace(/<<UserName>>/g,name);
var output=""
console.log(output1+" replace string using Regex ")
while(name.length<3 || !isNaN(name)){
    var read=require('readline-sync');
    var name=read.question("enter the name ");
    //console.log("enter valid name")
}
output=output+input.substring(0,6)+name+" "+input.substring(20,input.length);
console.log(output);
    
},



flipCoin(number){
    var head=0;
    var tail=0;
    var temp=1;
    while(temp<=number)
    {
        var v=Math.random();
    if(v<.5)
    {
        tail++; 
    }   
     else
    {
        head++
    }
    temp++;
}
var output =(head/tail)*100;
console.log("Percentage of Head vs Tails:"+output+"%");
},



findLeapyear(year)
{
    if(year%4==0 &&(year%100!=0 || year%400==0) )
    {
        console.log("is leap year")
    }
    else 
    console.log("is not a leap year")

},



findPower(num){
    var x=0;
    var power=1;
    console.log("table of the powers of 2 is :")
    while(x<num)
    {
        power=power*2;
        console.log(power);
        x++;

    }

},





findHarmonicNumber(num){
    var temp=0;
    while(num!=0)
    {
        temp=temp+1/num;
        num--;
        
    }
    console.log("harmonic number: "+temp);

},

printFactors(num){
  var arr=[];
  var i;
  for( i=2;i<=num;i++)
  {
      while(num%i==0)
      {
          
          arr.push(i);
          num=num/i;
      }
  
      
}
console.log(arr);
},





gambler(stack,goal){
    var win=0,loss=0,numberoftime=0;
    while(stack!=0 && stack!=goal)
    {
        var x=Math.random();
        if(x<.5)
        {
            win++;
            stack++
        }
        else
        {
        loss++;
        stack--;
        }
        numberoftime++;
    }
    var Percentageofwin=(win/numberoftime)*100;
    var Percentageofloss=(loss/numberoftime)*100;
    console.log(win+" number of time he wins")
    console.log(loss+" number of time he loss")
    console.log("Percentage of win "+Percentageofwin)
    console.log("Percentage of loss "+Percentageofloss)

},





findCouponNumbers(number)
{
    var arr=[];
    var num=0;
    while(num!=number)
    {
        var x=Math.round(Math.random()*number)
        if(!arr.includes(x))
        {
            arr.push(x);
            num++;
        }
    }
    console.log(arr)

},

print2DArray(rows,col){
    var arr=[];
    console.log("enter elements of arrays")
    for(let i=0;i<rows;i++)
    {
        arr.push([]);
        for(let j=0;j<col;j++)
        {
           var g=require('readline-sync');

            arr[i][j]=g.questionInt("enter the array element ");
        }
    }
    console.log(arr);

},





sumOfInteger(arr)
{
    var arr2=[];
    var count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            
            var arr1=[];
            for(let k=j+1;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k]==0)
                {
                   arr1.push(arr[i]);
                   arr1.push(arr[j]);
                   arr1.push(arr[k]);

                }
            }
            
            arr1.sort(function(a,b){return a-b});
            var str2="";
            for(let i=0;i<3;i++)
            {
                str2=str2+arr1[i];
            }
            console.log(arr1)
           

            if(!arr2.includes(str2) && str2.length>2)
            {
                arr2.push(str2);
                count++;
            }

        }
    }
console.log(arr2);
console.log(count);
},





findEuclideanDistance(x,y){
    var x1=x*x
    var y1=y*y
    var EuclideanDistance=Math.sqrt(x1+y1);
    console.log("Euclidean distance from the point (x, y) to the origin (0, 0)is : "+EuclideanDistance)

},


permutationOfString(str){
    var arr=str.split("");
    console.log(arr);
    var arr1=[];
    const c=str.length;
    for(let i=0;i<arr.length;i++)
    {
        var str1="";
        for(let j=i;j<c;j++)
        {
            str1=str1+arr[j];
            var s=str.length-str1.length;
           
        }
        if(str1.length<str.length)
        {
            str1=str1+str.substring(0,s);
        }
        if(!arr1.includes(str1))
        {
            arr1.push(str1);
        }

    }
    console.log(arr1);

},




Stopwatch()
{
    var date=new Date();
    return date.getSeconds();
},



findTime(read){
    var sptime
    var sttime
   
        var sttime=read.question("enter 0 starting time :")
        {
            var start=this.Stopwatch()
            var sp=read.question("enter 1 stop :")
            {
                var stop=this.Stopwatch()
                console.log(stop-start)
            }
        }

    
},


findRootsOfX(a,b,c)
{
    var c1=b*b-4*a*c;
    if(c1==0)
    {
        var root=-b/(2*a)
        console.log("root is :"+root)
    }
    else if(c1<0)
    {
        var c=Math.abs(c1);
    var n=2*a;
    var root1=(-b+Math.sqrt(c))/n;
    var root2=(-b-Math.sqrt(c))/n;
    console.log("roots given values : "+root1+"i"+","+root2+"-i");

    }
    else if(c1>0)
    {
    
    var n=2*a;
    var root1=(-b+Math.sqrt(c1))/n;
    var root2=(-b-Math.sqrt(c1))/n;
    console.log("roots given values : "+root1+","+root2);
    }
    else{
        console.log("invalid")
    }
},


determinationOfWindChill(temp,speed)
{
    
    
    var ps=Math.pow(speed,(.6))
    var v=(.427*temp-35.75)*ps
    var w=35.74+.6215*temp+v;
    console.log("windcill for given value "+w)
},

checkWordsAreAnagram(str,str1){
    var s="";
    var s1="";
    str=str.toLowerCase();
    str1=str1.toLowerCase();
    var arr=str.split("");
    arr.sort();
    var arr1=str1.split("");
    arr1.sort();
    if(str.length==str1.length)
    {
    for(let i=0;i<str.length;i++)
    {
        s=s+arr[i];
        s1=s1+arr1[i];
        
    }
    if(s==s1)
    {
        console.log("given words are anagram")
    }
    else
    console.log("given words are not anagram")
    }
    else 
    console.log("words are not anagram")


},



checkNumbesArePrimeNumber(range){
    var arr=[];
    for(let i=1;i<=range;i++)
    { 
        var c=0;
        for(let j=i;j>=1;j--)
        {
            if(i%j==0)
            {
                c++;
            }
        }
        if(c==2)
        {
            arr.push(i)
        }
        
    }
    console.log("prime number in given range are :")
    console.log(arr)
},
 


primeNumerAndAnagram(range)
{
    
    var arr=[];
    var arrpalind=[];
    var arranagram=[];
    var arrayanagram=[];
    for(let i=1;i<=range;i++)
    { 
        var c=0;
        for(let j=i;j>=1;j--)
        {
            if(i%j==0)
            {
                c++;
            }
        }
        if(c==2)
        {
            var str="";
            str=str+i;
            var str1=""
            var arrsort1=str.split("");
            for(let i=arrsort1.length-1;i>=0;i--)
            {
                str1=str1+arrsort1[i]

            }
              if(str==str1)
            {
                arrpalind.push(i);

            }
            var arrsort=str.split("");
            arrsort.sort();
            var s=""
            for(let i=0;i<arrsort.length;i++)
            {
                s=s+arrsort[i];
            }
            if(!arranagram.includes(s))
            {
                arranagram.push(s);
                arrayanagram.push(i);
            }

            arr.push(i)
        }
        
    }
    console.log("prime number in given range are :")
    console.log(arr)
    console.log("prime numbers that are Anagram are :")
    console.log(arrayanagram)
    console.log("prime numbers that are palindram are :")
    console.log(arrpalind)
    

},




bubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    console.log(arr)

},


insertionSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        
        for(let j=i;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;

            }
        }
        console.log(arr)
    }
    console.log(arr)

},

temperaturConversion(num,read)
{
    if(num==0)
    {
        var temp=read.question("enter temperature in fahrenheit")
        var teminC=(temp-32)*(5/9)
        console.log(temp+"°F Conversion of fahrenheit to Celsius is :"+teminC+"°C")
    }
    if(num==1)
    {
        var temp=read.question("enter temperature in  Celsius")
        var teminC=(temp*(9/5))+32
        console.log(temp+"°C Conversion of  Celsius to fahrenheit  is :"+teminC+"°F")
    }
    

},

monthlyPayment(Y,R,P){
    var n=12*Y;
    var r=R/(12*100)
    var d=1-(1+r)**(-n)
    var mp=(P*r)/d;
    console.log(" monthly Payment is :"+mp)
   

},
toBinary(num){
    var tem=num
    var st="";
    while(num>.9)
    {
   
  var  s=Math.floor(num%2)
   st=s+st
   num=num/2
   
    }
   
console.log("binary value for given number is:"+st)
return st;

},
swapBinary(num){
    var bin=this.toBinary(num)
    console.log(bin)
    while(bin.length<8)
    {
        bin=0+bin;
    }
    console.log(bin)
    var st=bin.substring(4,8)+bin.substring(0,4)
    console.log(st)
    var arr=st.split("")
    var sum=0
    console.log(arr)
     var c=0;
    for(let i=arr.length-1;i>=0;i--)
    {
        var s=2**c
        
        var s1=arr[i]*s
        sum=sum+s1
        c++

    }
    console.log(10)
    var x=this.toBinary(sum)
    var arr2=x.split("")
    var con=0;
    for(let i=0;i<arr2.length;i++)
    {
        if(arr2[i]==1)
        {
            con++
        }
    }
    if(con==1)
    {
        console.log("number is power of 2")
    }
    else
    console.log("not")

    


},

}