let score = undefined

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0 keep in mind in the case of temperature
//undefined => NaN

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// console.log(typeof NaN) //number

let isLoggeIn = 1
/*
isLoggedIn = 1 => true
"" => false
"anand" => true
*/
let booleanIsLoggedIn = Boolean(isLoggeIn)
console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)