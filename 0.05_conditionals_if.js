//if statements: Are used to tell JS which statements to execute based on a condition

var isEmployed=true;
var isMale=true;

if(isEmployed){
	console.log("Jake works for ICI")
}

//Shorthand for checking for true


//longhand for checking for true
if(isEmployed===true){
	console.log("Jake still works for ICI")
}

//Conditional Operators
//AND &&
//OR  ||
//NOT ! (that inverts what the value is)

isEmployed=true;
isMale=true;
if(isEmployed&&isMale){
	console.log("Jake works for ICI and is male");
}

if(isEmployed||isMale){
	console.log("I'm not sure what to say");
}

if(!isEmployed){
	console.log("Jake does not work for ICI");
}