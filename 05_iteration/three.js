//forof loop
//["", "", ""]
//[{}, {}, {}]




// const arr = [1, 2, 3, 4, 5]
// for (const i of arr) {
//     console.log(num);
// }
//forof loop in array prints actual values in the array




// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }




// //maps and forof loop in maps

// const map1 = new Map()
// map1.set("IN", "India")
// map1.set("USA", "United States of America")
// map1.set("FR", "France")
// map1.set("IN", "India") //no duplication will happen

// //console.log(map1);

// for (const [i, j] of map1) {
//     console.log(i, ':-', j);
//     //i is key j is value we can write key and value
//     //in place of i and j but just to know how things 
//     //work i have taken i and j
// }
// // maps remember the insertion order and 
// // they dont allow duplication




const myObject = {
    "game1": "NFS",
    "game2": "Spiderman"
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
// object not iterable by forof loop
//to iterate object we can use forin loop
//remaining discussion in four.js file in 05_iteration