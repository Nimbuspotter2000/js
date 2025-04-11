const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //100.00

let otherNumber = 23.8654
console.log(otherNumber.toPrecision(3)); //23.9

otherNumber = 123.8654
console.log(otherNumber.toPrecision(3)) //124

otherNumber = 1123.8654
console.log(otherNumber.toPrecision(3)); //1.12e+3

const hundreds = 10000000
console.log(hundreds.toLocaleString()) //10,000,000 
// US standard
console.log(hundreds.toLocaleString('en-IN'));
//1,00,00,000 Indian standard

// ************** Math ************* //
console.log("*****************************")

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.3)); //4
// console.log(Math.ceil(4.5)) //5
// console.log(Math.floor(4.5)) //4
// console.log(Math.min(4, 2, 6, 9))
// console.log(Math.max(4, 3, 7, 1))

console.log(Math.random()); //0 ≤ Math.random() < 1
console.log((Math.random()*10) + 1); //to avoid 0
console.log(Math.floor(Math.random()*10) + 1);//1 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min) //to get minimum value 10 note-> 20 also inclusive



