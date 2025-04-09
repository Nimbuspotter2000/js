// primitive call by value

// 7 types : String, Number, Boolean, null, undefined,
// symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId); //false symbol is used
//to uniquely identify things

const bigNumber = 437837539843974n

// non primitive (reference type)

//Array, Objects, Functions

const heros = ["Shaktiman", "Naagraaj", "Doga"]

let myObj =
{
    name: "Anand",
    Age: 25
}

const myFunction = function()
{
    console.log("Hello World");
}

console.log(typeof outsideTemp) //object
console.log(typeof myFunction) //object function
console.log(typeof myObj) //object
console.log(typeof heros) //object

//stack(primitive)(by value), 
// heap(non-primitive)(by reference)

let myYoutubeName = "AnandPrajapati"
let anotherName = myYoutubeName
anotherName = "VickyPrajapati"

console.log(myYoutubeName)
console.log(anotherName);

let userOne =
{
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Anand@google.com"

console.log(userOne.email)
console.log(userTwo.email)
