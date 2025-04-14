//foreach loop

//const coding = ["js", "rb", "cpp", "python", ]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe) //give only the 
// // reference of printMe

// coding.forEach( (item, ind, arr) => {
//     console.log(item, ind, arr);
// })




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`language name is ${item.languageName} and its file extension is ${item.languageFileName}`);
} )




/*
keep an eye on which loops works how on 
arrays
objects
and maps
 */