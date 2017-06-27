//Objects

var emptyObject={};


var jakeDocking={ 
	//Properties
	name :"jakeDocking",
	age  :29,
	vocation:"Policy and Research Analyst at ICI",
	isRetired:false,
	//Methods
	greeting:function(){
		console.log("Hello, I am"+" "+this.name+"."+"I am "+this.vocation);},
	
	ageOf:function(){
		console.log("Nice to meet you, I am "+this.name+"."+" I am "+this.age);
	},
};
jakeDocking.ageOf();
console.log("#############################################");

jakeDocking.greeting();
console.log("####################################");
console.log(jakeDocking);
console.log(jakeDocking.name);
console.log(jakeDocking.age);
console.log(jakeDocking.middleName);   //undefined
console.log("-----------");

var animal={
	type:"bear",
	habitat:"woods",
	weight:500,
	commonInIndiana:false,

};

console.log(animal.weight);
console.log(animal["weight"]);

var friend={
	height: 6,
	neighborhood: "Indianapolis",
	job: "accountant",
	lastName: "Smith"
};

console.log(friend.neighborhood);
console.log(friend.lastName);

var movie={
	name: "American Sniper",
	starring: "Bradley Cooper",
	setting: "Iraq",
	grossed: 500000000
};

console.log(movie.name);
console.log(movie.grossed);

var car={
	Make: "BMW",
	Model: "318iS",
	Color: "Black",
	Miles: 230000,
	Awesome:true


};

console.log(car.Model);

console.log(animal.favoriteFood);
animal.favoriteFood="broccoli"
console.log(animal.favoriteFood)
animal.color="blue";
animal.freakOfNature=true;
console.log(animal.color);
console.log(animal.freakOfNature);

delete animal.freakOfNature;
console.log(animal.freakOfNature)//undefined

//properties can be more than just strings, bool, and numbers
//can include arrays and other objects

animal.moviesAboutMe=["Lion King", "Happy Feet", "Marley & Me"];
console.log(animal.moviesAboutMe);

console.log(animal.moviesAboutMe[1]);

console.log(Object.keys(animal))

//Inheritance

//longish hand way but my favorite
var car={
	make:"",
	model:"",
	year:0,
	constructor:function(make,model,year){
		this.make=make;
		this.model=model;
		this.year-year;
	}
};

var myCar=Object.create(car);
myCar.constructor("Honda","Civic",1997);
console.log(myCar.make);

//Shorthand way of inheritance
var book = {
	title:"",
	yearPublished:0,
	numPages:0,
	constructor:function(title,yearPublished,numPages){
		this.title=title;
		this.yearPublished=yearPublished;
		this.numPages=numPages;
		return this;
	}
}

var myFavBook=new book.constructor("Steelheart",2015,300);
console.log(myFavBook.title);

//shorterhand version
//javascript is chaos
//tehcnically...fucntions are also objects
//so
//we can do something like this

function computer(screenSize,hardDriveSize,hasNumPad){
	this.screenSize=screenSize;
	this.hardDriveSize=hardDriveSize;
	this.hasNumPad=hasNumPad;

}

var myPC=new computer(17,"1TB",true);
console.log(myPC.screenSize);


//Objects are references
//car car
//*****************object***********
//					car^

var pcOne=new computer(12,"500GB", false);
var pcTwo=new computer(14,"2TB",true);
var pcThree=pcTwo;

console.log(pcOne.hardDriveSize);
console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

pcTwo.screenSize=15;

console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

//Objects are not copied!!! They are referenced.

