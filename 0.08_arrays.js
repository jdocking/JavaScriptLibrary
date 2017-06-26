//Arrays are a collection of items
//We define them using []s

var rainbowColors=["Red","Orange","Yellow","Green","Blue","Indigo","Violet"];
var raceWiner=[33,72,64];
var myFavorite=["Broccoli",2,"Taylor Swift", true];//Mixed type array
//Don't actually ever do that
//Just because you can
//Doesn't mean you should

console.log(rainbowColors);

//Arrays have indexes

// var countries=["USA","Russia","Germany"];
// //indexes 		0		1		2

// console.log(countries[2]);

console.log("---------------------");

//interating over arrays
//Tricky at first but gets pretty easy

var movies=["die hard","Dumb and dumber", "Lord of the rings", "The departed", "Fight Club","Harry Potter"]

for(var i=0;i<movies.length; i++){
	console.log("The index is:",i);
	console.log(movies[i])
}

var names=["Jake","George","Miguel","Joe"]
	
for(var i=0;i<names.length; i++){
	console.log("The name number is:",i);
	console.log(names[i]);

}
var cars=["Ferrari","Porsche", "BMW"]

for(var i=0;i<cars.length; i++){
	console.log("The index is:",i);
	console.log(cars[i])
}