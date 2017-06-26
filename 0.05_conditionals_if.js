//if statements: Are used to tell JS which statements to execute based on a condition

var isOn=true;
var isHot=true;

if(isOn){
	console.log("The light is on")
}

//Shorthand for checking for true


//longhand for checking for true
if(isOn===true){
	console.log("The light is still on")
}

//Conditional Operators
//AND &&
//OR  ||
//NOT ! (that inverts what the value is)

isOn=true;
isHot=true;
if(isOn&&isHot){
	console.log("The light is on and it is hot");
}

if(isOn||isHot){
	console.log("I'm not sure what to say");
}

if(!isOn){
	console.log("The light is not on");
}