//Strings are a group of characters
//Strings must go in quotes

console.log("I'm intercontinental when I eat French Toast");

var tweet = "Kanye is broke. No joke!"
console.log(tweet);
var username='jdocking';
console.log(username);

var password="2345password9!"
console.log(password)

var birthCity = "Evanston";
var birthState="Illinois";
var commaSpace=",";
console.log(birthCity+commaSpace+birthState)
//concatenate

//Mixing strings & integers
var ageInOctober = 30;
var highSchool="Peters Township HS"
var graduatedHS=2006;
console.log(highSchool+commaSpace+graduatedHS);
console.log("My age in October:", ageInOctober);

//I graduated from <hs> in <year>
var hs="Peters Township"
var year=2006

console.log("I graduated from " + hs + " in " + year);

//String Methods (functions)
console.log(highSchool.length);
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());
console.log(highSchool.split("m"));
//slice off everything before specified index
//indicies of strings start at 0
console.log(highSchool.slice(3));