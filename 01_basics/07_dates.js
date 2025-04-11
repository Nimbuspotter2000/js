let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString()) //mm/dd/yyyy
console.log(myDate.toLocaleString())

console.log(typeof myDate); 
//myDate is an instance of Date object
console.log(typeof myDate.toLocaleDateString())
//string

let myCreatedDate = new Date(2025, 3, 11)
//month in js start from 0 if 
// single digit hai to , here 3 gives apr
console.log(myCreatedDate.toDateString());
myCreatedDate = new Date("2025-01-11")
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date("01-14-2025") //Indian
console.log(myCreatedDate.toDateString());

console.log("**************************");

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//seconds

console.log("**************************");

let newDate = new Date()
console.log(newDate.getMonth() + 1); //3 means april
//added one to get 4 for easier understanding
console.log(newDate.getDay());//0-sunda 6-saturday
console.log(`today is ${newDate.toLocaleDateString()} and the time is ${newDate.toTimeString()}`);


console.log("*********************************");
//customising format acc to need
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));











