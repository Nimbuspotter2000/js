let score = undefined

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0 keep in mind in the case of temperature
//undefined => NaN

//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// console.log(typeof NaN) //number

let isLoggeIn = 1
/*
isLoggedIn = 1 => true
"" => false
"anand" => true
*/
let booleanIsLoggedIn = Boolean(isLoggeIn)
//console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)

//*************** operations****************
let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2+2);
// console.log(3**2)
// console.log(4/3)
// console.log(4%3)

let str1 = "hello"
let str2 = " anand"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) //12
console.log(1+"2") //12
console.log("1"+"2") //12
console.log("1"+ 2 + 2) //122
console.log(1 + 2 + "2") //32
//string first to sabhi ko string ki tarah treat
//string last me hoga to pahle wale conversion ho jayenge

console.log(true); //true
console.log(+true); //1
// console.log(true+); //error
console.log(+"") //0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

//understanding difference 

let x = 3;
const y = x++;

console.table([x,y]) //4, 3


let a = 3;
const b = ++a;

console.table([a,b]) //4, 4

/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/
