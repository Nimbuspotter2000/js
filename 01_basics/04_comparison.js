// console.log(2  >1);
// console.log(2  >= 1);
// console.log(2  < 1);
// console.log(2  == 1);
// console.log(2  != 1)

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);//false , converts null to 0
console.log(null == 0);//false
//== does not convert null to 0
//null is only loosely equal 
// to undefined — and to nothing else
console.log(null == undefined);//true
console.log(null >= 0);// true 
// here null is converted to zero
//Weird coercion rules
//Different rules for == and 
// comparison operators (<, >=, etc.)

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0); //all three give false

//=== strict check along with datatype
//no conversion is done
console.log("2" === 2); //false