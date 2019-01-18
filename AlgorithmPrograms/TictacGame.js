const D=require('../utility/utility');
const read=require('readline-sync');
function ticTocToe(){
    var flag = false;
    var arr = D.crossGame();
    console.log("Let computer be player 1(O)_and you be the player 2(X)");
    console.log("Ready for the game:-)");
    var count = 1;
    while(count<=9) 
    {
        arr = D.computerPlay(arr);
       // console.log(arr);
	    count++;
	    flag = D.checkGame(arr);
	    if(flag)
	    {
    	    console.log("Computer is the winner");
	        break;
	    }
	    else if(count==9)
	    {
		    console.log("Oh oo, The match is draw");	
		    break;
    	}
	    arr = D.userPlay(arr,read);
	    flag = D.checkGame(arr);
	    if(flag)
	    {
	        console.log("Congratulations You are the winner");
		    break;
    	}
	    count++;
		}
        console.log("Game end");
}
ticTocToe();