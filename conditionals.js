
let username = process.argv[2];


if(username == undefined){
    console.log("you must provide a username");
}else{
    console.log("hello "+username)
}


console.log("You find yourself in a store shopping...");

let health = 100
let money = 100

let item = process.argv[3]

if(item=="jacket"){
    money-=40;
    health+=20;
    console.log("you bought candy");
}else if(item=="candy"){
    money-=10;
    console.log("you bought candy");
}else if(item=="paint"){
    money-=30;
    console.log("you bought paint");
}else if(item=="hammer"){
    money-=70
    console.log("you bought a hammer")
}else{
    console.log("you bought nothing")
}
console.log(`You have ${money} dollars left.`);

console.log("You exit the store and find yourself in the middle of an anti-android protest!");
console.log("You could run or stay...");
const randomPerson = Math.random() > .5 ? "John" : "Felipe"; 
// You're given a variable "randomPerson" that is a string
// NOTE: 
// We'll discuss Math.random() later this week!
// If you're curious about the rest, look up "JS ternary operator"


let choice = process.argv[4]
// If "choice" is NOT defined (recall how we did this with the "username" variable)
//      - console.log("You shut down due to inactivity and get robbed of all your money");
//      - reduce "money" to 0
if(choice==undefined){
    console.log("you shut down due to inactivity and get robbed of all your money")
}else{
    console.log("nice"+choice)
}

// Else if "choice" is NOT "run" AND "randomPerson" is "Felipe" 
//      console.log("The protesters attack you...");
//      - if "item" is NOT "jacket"
//          - console.log("...but Felipe, a fellow android shows up to help you escape them");
//      - else
//          - console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket");
//          - reduce "health" by 50

// Else if "choice" is "run" AND "randomPerson" is "John" 
//      - console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you...");
//      - if "item" is "hammer" OR "jacket"
//          - console.log("...and holds you for questioning for suspicious activity");
//          - reduce "money" to 0
//      - else
//          - console.log("...and seeing you have no ill intent, John protects you from the protestors and lets you go.");

// Else (technically this means you ran AND got Felipe OR didn't run AND got John)
//      - if "item" is "paint"
//          - console.log("You boldy protest by painting a pro-android message...");
//          - create a variable "message" and set it equal to the user's fourth command line argument
//          - if "message" is defined
//              - console.log(`..."${message.toUpperCase()}""`);
//          - else
//              - console.log(`..."WE ARE ALIVE"`);
//      - else
//          - console.log(`Nothing interesting happens, but at least you got that ${item}`);

///////////
// SCOPE //
///////////

// We'll see scope play a larger role when we talk about functions,
// but any time there are curly brackets, the space in between the 
// brackets have their own scope, meaning variables defined inside of
// that scope are inaccessible to the world outside of those brackets

// Create a variable "score" and set it equal to 0

// Add "money" and "health" to "score"

// If "choice" is defined, add 10 points to "score"
// NOTE: Recall where "choice" was initialized (created). What scope was it in?
// The global scope! So all of your code has access to it.

// if "message" is defined, add 10 points to "score"
// NOTE: Recall where "message" was initialized/created. 
// It's within curly brackets! 
// Alter your code so that "message" is initialized  in the global space 
// right alongside "choice"

//////////////////////
// STORY CONCLUSION //
//////////////////////
// console.log("The end");
// console.log(`Score: ${score}`);
