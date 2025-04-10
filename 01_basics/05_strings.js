const name = "Anand"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation useing backtick

const gameName = new String("Anandp-kp")

console.log(gameName[0]); //dont confuse it with array
//its key value pair
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
//original string change nahi hoti recall primitive DT
console.log(gameName.charAt(2));
console.log(gameName.indexOf('A'));
console.log(gameName.indexOf('n'));//shows index of first n

const newString = gameName.substring(0, 4) //4th index not included and it substring does not obey negative values of keys

console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "   Anand   "//many times user unknowingly gives space in the beginning and in the end to avoid that we use trim method
console.log(newString1)
console.log(newString1.trim())
const newString2 = "   Anand Kumar  "
console.log(newString2.trim()) //trim trims only 
// beginning and end spaces 
// not the middle ones output = Anand Kumar

const url = "https://anand.com//anand%20prajapati"
console.log(url.replace('%20', '-'))
console.log(url.includes('anand')) //true

const myExample = "Anand-Kumar-prajapati"
console.log(myExample.split("-"));

/*
note- string is not an array though it
behaves like an array but u can't change the 
characters using the index as we do in array
*/