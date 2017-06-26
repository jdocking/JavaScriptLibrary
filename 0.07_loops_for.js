//For loops
//For loops are similar to while loops in that they let us repeat statements
//However they are more specialized.

//for(counter; condition; increment){
	//Code to be run
//}

// for(var i= 1; i<50; i++){
// 	console.log(i);
// }

// for(var i=0; i<=100; i+=5){
// console.log(i);}

// for(var i=3; i<40; i+=7){
// 	console.log(i);
// }

//break statement <- Covered in switch earlier
//breaks are used to prematurely exit a loop

for(var i=0;i<20;i++){
	console.log("Testing:",i);
	if(i===13){
		console.log("Found 13!")
		break;
	}
}