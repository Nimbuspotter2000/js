//array
//we can store different datatypes in the same array in js
//js arrays are risizable
//copy operation creates shallow copy(same reference)
//const myAr = [0, 1, 2, 3, 4, true, "Anand"]

//ways to declare
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "batman"]
const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[1]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)//shifts all the values to the right and inserts 9 in the beginning, array bada hua to heavy process ho jayega
//myArr.shift()//first element delete baaki left shift

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); //-1 means nahi hai 
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr)//string


//slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1, )
console.log("B slice", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C splice",myArr);

/* most imp
slice- second index parameter not included
slice- doesnot manipulate the original array

splice- second index parameter included 
splice- manipulates the original array, it deletes the teh elements in the range provided in the splice method
*/











