//Switch statements
//Very similar to if statements/ifelse/ifelseifelse

//how it works:
//The value is evaluated once
//It is then compared with cases
//If a matching case is found, executes code

var marginOfSuperBowlWin=3;
var result;

switch(marginOfSuperBowlWin){
	case 3:
		result= "That will be a good game";
		break;
	case 7:
		result= "I like it.Pretty close game";
		break;
	case 17:
		result= "Sweet we can just focus on the commercials";
		break;
	default:
		result= "I don't know.Let's see what happens";
}

console.log("Switch Results:", result);