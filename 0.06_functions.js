//Functions: executes action or actions and allows us to reuse code without retyping it and makes code cleaner

function hello()

function printOneNumber(){
	console.log(1);
}

printOneNumber();

function divider(){
	console.log("--------------");
}	I

divider();

//above is wrong

//Scope with variables
//Think of it like a rifle scope

//var x=8;

function add(){
	var x=2;
	var y=7;
	console.log(x+y);
}

add()

function subtract(){
	var x=4;
	var y=1;
	console.log(x-y);
}

divider();

//parameters/arguments(basically the same thing)
	//Parameters are what the names in the function definition
	//Arguments are what is passed to the function

function numberEntered(x){//x is a parameter
	//x and 7 share the same value
	console.log("Number entered:",x);
}

numberEntered(7);//7 is the argument

//can have as many parameters as you want.

function addTwoNums(x,y){//x and y are parameters
	console.log(x+y);
}

addTwoNums(4,7);//4 and 7 are arguments

//Return keyword
//When JS hits the return keyword, it will stop executing the function, and return its argument

function mood(){
	return "I'm feeling great"
}

console.log(mood());//Mood becomes the argument for console.log()

function multiply (x,y){
	return x*y;
}

console.log(multiply(3,8))

//On your own:
//write a function that takes two arguments, a first name and a last name, and combines them to
//return <firstname><lastname> and then print the return value to the console;

function addNames (firstname, lastname){
	return firstname+lastname;

	console.log(addNames"Jake ", "Docking" ))}

//Loops(small preview)

for(var i=0;i<5;i++)}
	divider();