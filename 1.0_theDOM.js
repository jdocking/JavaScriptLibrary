//--------------------------------------------------------

//DOM Access Methods*/



//Finding DOM nodes by id:

        //document.getElementById(id);

        

//Finding DOM nodes by tag name:

        //document.getElementsByTagName(tagName);

        

//Finding DOM nodes by class name:

        //document.getElementsByClassName(className);

//Finding DOM nodes by query selector:

          //document.querySelector(cssQuery);

          //document.querySelectorAll(cssQuery);



     

//---------JavaScript and use Chrome Dev Tools to see the console.log

// -----------------Lesson: The DOM-----------------------

//--------------------------------------------------------

//--------------------------------------------------------



/*What we've done so far is fun, but how do we display our awesome JS on a website?



The Document Object Model is created when a web page loads HTML

  It  defines the logical structure of an HTML document and how it is accessed and manipulated

  Using JS you can do stuff like.....



        change all the HTML elements in the page

        change all the HTML attributes in the page

        change all the CSS styles in the page

        remove existing HTML elements and attributes

        add new HTML elements and attributes

        react to all existing HTML events in the page

        create new HTML events in the page*/


var hobbiesList=document.getElementById('hobby-list');
console.log(hobbiesList);

//byTagName
var hobbies=document.getElementsByTagName('li');
console.log(hobbies);//returns collection of elements in an array
console.log(hobbies[0])

//by Class Name
var alsoHobbies=document.getElementsByClassName('hobby');
console.log(alsoHobbies);

//css query
var firstHobby=document.querySelector('ul li.hobby');
console.log(firstHobby);
var allOfThem=document.querySelectorAll('ul li.hobby')
console.log(allOfThem);

//Rendering to HTML
//Each DOM node has an inner HTML attribute
//You can set innerHTML yourself to replace the contents of a node

function favoriteSong(){
	document.getElementById("favorite").innerHTML="Bach"
}

//worst song
//best song to something else
function worstSong(){
		document.getElementById("worst").innerHTML="Trap Music"

}
//--------------------------------------------------------

//MORE HTML MANIPULATIONS



// Adding and Deleting Elements



// document.createElement(element)      Create an HTML element

// document.removeChild(element)        Remove an HTML element

// document.appendChild(element)        Add an HTML element

// document.replaceChild(element)       Replace an HTML element

// document.write(text)                 Write into the HTML output stream
function badsong(){
		document.getElementById("best").innerHTML="Country Music"
}

favoriteSong();
worstSong();
badsong();

function addButton(){
	var btn=document.createElement("BUTTON"); // Creates a <button> element
	var text=document.createTextNode("I just got added!!");//Create a text node
	btn.appendChild(text);
	document.body.appendChild(btn);

}

function removeList(){
	var list=document.getElementById('music');
	document.body.removeChild(list);
}

//function waterToWine(){
	//var textnode=document.createTextNode("Wine!!!");
	//var item_document.getElementById("myList").childNode[0];
	//item.replaceCHild(textnode,item.childNodes[0]);

//}

function writeWords(){
	document.write("Tif Added me!!!!");
}

//numbers that the player guesses

var numOne;
var numTwo;
var numThree;
//The randomly chosen numbers to be guessed
var ansOne =genRandom();
var ansTwo;
var ansThree;
//tries counter;
var tries=10;

//do while looop
//Executes the code once, then repeats if the condition is met

do{
  ansTwo=genRandom();
  
}while(ansTwo===ansOne);
do{
  ansThree=genRandom();
}while(ansThree===ansOne || ansThree===ansTwo)
 
  function check(){
    //store the guesses in our variables
    numOne=document.getElementById("num1").value;
    numTwo=document.getElementById("num2").value;
    numThree=document.getElementById("num3").value;
  
    if(numOne==ansOne){//only two equal signs because .value retunrs a string and our random numbers are integers
      changeColor("num1", "green");//id, color
  }
    else if (numOne==ansTwo || numOne==ansThree){
    changeColor("num1","yellow");
  }
    else{
    changeColor("num1", "red");
  }
  if(numTwo==ansTwo){//only two equal signs because .value retunrs a string and our random numbers are integers
      changeColor("num2", "green");//id, color
  }
    else if (numTwo==ansOne || numTwo==ansThree){
    changeColor("num2","yellow");
  }
    else{
    changeColor("num2", "red");
  
  }

function changeColor(id, color){
  document.getElementById(id).style.backgroundColor=color;
}

function changeText(id, text){
  document.getElementById(id).innerHTML=text;
}
function genRandom(){
  //math.random()--this returns a random decimal between 0 and 1(noninclusive)
  //0-9 Math.random() 0-0.999999999999999 -0-9
  var randomNum=Math.random();
  //Get it between 0-9
  randomNum*=10; //randomNum = randomNum*10
  return Math.floor(randomNum); //Math.floor chops off all decimals
}

console.log()

