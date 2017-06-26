//If/Else statements
//Else Statements give JS an alternative statement to execute

var elevatorUp=true;
var elevatorDown=true;
var elevatorBroken=true;
var elevatorStuckWhileWeAreOnIt=true;
var elevatorNumber=13;

if(elevatorUp ===true){
	console.log("Going up");
}else{
	console.log("Going down");
}

//with an if/else statement
//describe if the elevator is broken or not

if(elevatorBroken===true){
	console.log("We should take the stairs");
}else{
	console.log("Take the elevator up");
}

//Combining variable types for conditionals

if(elevatorStuckWhileWeAreOnIt && elevatorNumber===12){
	console.log("Today is Not our lucky day");
}else{
	console.log("I'm glad we are blessed with good luck!");
}