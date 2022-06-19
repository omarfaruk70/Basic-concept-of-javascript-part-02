//Function expression and arrow function.
// Normal function
function totalNum(num1, num2){
    return result = num1 + num2 ;
}
var output = totalNum(5 , 10);
console.log(output);

// function expression 
let myself = function(name) {
    console.log("Hello! EveryOne . This is " + name ) ;
}
myself('Faruk')

// another function expression ~~       
let saySomething = function(doThis){
    console.log(`I love to do coading in a single day ${doThis}`)
}
saySomething("to be a web developer");
// arrow function
let education = (name) => {
    console.log("This is Omar " + name + " here today");
}
education("Faruk");



// //  syntex of function expression
// var/let/const sumofTwoNum = function(firstNum, secondNum){
//     return result = firstNum + secondNum 
// }
// sumofTwoNum(5,15);

// syntex of arrow function 
// var aboutMe = ( ) => {

// }


// arrow function e => (arrow) use kora hoy bole ei function k arrow function bole.