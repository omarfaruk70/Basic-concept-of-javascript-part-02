// Javascript Object method .
// We can use many many things as a value of property in an Objects. And they are: - 
// Array, String, Number, Object, Function etc.
// What is method ? 
// Ans: jokhon kono ekti Object er property r value hisabe amra function use kori tokhn takee amra Method boli.


let person = {
    userName: "Omar Faruk",
    dateOfBirth: "07-11-2002",
    profession: 'Student',
    address: "Feni, Bangladesh",
    education: "Diploma in Telecommunication technology at Feni Computer Institute.",
    details : function(){
        return `I am ${this.userName} I am a ${this.profession}`
    }
}
console.log(person.userName);
console.log(person.details());

// jokhon kono ekta function tar nijer object er property use korte chay tokhn ta k (this. property name) use korte hoy. this is too important.

var Str = '244545644'
console.log(Str.length);
console.log(Str.split())
console.log(Str.slice())
