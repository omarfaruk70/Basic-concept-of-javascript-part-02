// parameter , arguments and return  in a function.
function saySomething() {
    alert("Hello world");    
}
saySomething();


function sayBd(para01){
    alert(para01);
}
sayBd("Amar sonar bangla ami tomay valobashi");
// ekhane para01 holo parameter and saybd("string ta holo arguments");


// another practise
function myDream(para02){
console.log(para02)
}
myDream ("I will be a software developer in-sha-allah");


// dynamically change the value of a function
function mywork(para03 = "to learn javascript every single day"){
    document.write(para03)
}
mywork("to learn Js and prepare myself to be a junior software developer")


// how to use multiple parameter in a single function
// fname is first name and lname is lastName
function myName(fname,lname,nName){
    console.log(`Hi! I am ${fname} ${lname}  and my nickname is ${nName}`)
}
myName("Omar","Faruk" , "Faruk");

// Function of a mathmatical operation
function addNumber(a = 0, b = 0){
    var result = a + b ;
    console.log(result);
}
addNumber(10,25);


// another math operation practise
function multiplier(c = 0, d = 0){
    //var result = c * d ;
    return (c * d)
    ///console.log(result);
}

let result = multiplier(50,15);
console.log(result)

// randomly user can send any arguments in a function
function randomName(name){
    return(`My Name is ${name}`)       
}
let result1 = randomName("Omar Faruk");
let result2= randomName("Saiful Emon");
console.log(result1, result2)
// another practise
function adding (a=0,b=0){
    var result = a+b;
    console.log(`The result is ${result}`)
}
adding(10,25);