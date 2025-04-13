//singleton
//object.create constructor method (singleton formed)

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Anand",
    "full name": "Anand Prajapati", //cant be acc by dot
    [mySym]: "mykey1",//symbol as key
    age: 25,
    location: "Lucknow",
    email: "Anand@google.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "saturday"]
}
//keys are taken as string
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Anandchatgpt@google.com"
//Object.freeze(JsUser)
JsUser.email = "Ananddeepseek@google.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(JsUser.greeting);//function execute nahi hua hai bas function ka reference aayega
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser)

console.log(Object.keys(JsUser)) //symbol wont show up in this

/*
In JavaScript, Symbol keys are not enumerable in the same way string keys are. So:

They don’t show up in normal loops like for...in

They show up last in console.log outputs (most engines do this)

They’re treated differently by methods like Object.keys() — symbols won’t appear there at all.
*/




