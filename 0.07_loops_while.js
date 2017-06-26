//Loops are used to do things multiple times easily
//The while loop tells JS to repeat statements until a condition is false

//Example

var score=0;

while(score<10){
	score++;//This is shorthand for saying (score=score+1)
	console.log("Score is:", score);
}

//another example
var age=0;
while(age<100){
	age+=10;//Shorthand for (age=age+10)
	console.log("Our age is:", age);
}

if(age===100){
	console.log("I'm a century old! Literally");
}

//Challenge
//Write a while loop that prints 10-100 by 10s
//At 50, print "halfway there"

//while(condition){
	//increment counter
	//print counter
	//Check if 50
		//If so, print message
//}

var count=0;
while(count<100){
	count+=10;//Shorthand for (count=count+10)
	console.log("We are getting older", count);

if(count===50){
	console.log("I'm halfway there! ", count);
}
}

