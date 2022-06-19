// Array iteration using forEach
var foodsName = ["ICE-Cream", "Chocolate", "Biriyani", "Kacchi"];
foodsName.forEach(function(value, i, arrayfull){
    console.log(value, i, arrayfull);      // forEach just give three parameters 1. value. 2. index 3. full array.
})


// map statement use case
var number = [10,5,11,12];
var squareNumber = number.map(function(item){
    return item * item ;
})
console.log(squareNumber);

// another practise of array iteration of forEach
var arr = ["Rohima", "Korima", "Shamima"]
arr.forEach(function(first,second,third){
console.log(`The value is ${first} ${second} ${third}`)
})

// family array practise by forEach loop
let members = function(value, i){
    console.log(`${value} position is ${i}`)
}
var family = ["Nasrin", "Parvin", "Faruk" , "Urmi", "Armin"]
family.forEach(members);



// for Each method e just value , index and array output dey . but map()  method
// e change , push, pop aro onk kichu kora jay. 
// forEach() method e return kora jay nah. map() method e return kora jay.


var numbers = [2,5,6,5,8,6]
var squareNumber = numbers.map(function(item){
    return item * item

})
console.log(squareNumber)