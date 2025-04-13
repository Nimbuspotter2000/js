function sayMyName()
{
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}

//sayMyName()

// function addTwoNumbers(number1, number2)//parameter
// {
//     console.log(number1 +number2)
// }

// addTwoNumbers(3, 4) //Number 7
// addTwoNumbers(3, "4") //string 34
// addTwoNumbers(3, "a") //string 3a
// addTwoNumbers(3, null) //Number 3

// const result = addTwoNumbers(3, 5)
// console.log("result: ", result)//undefined 
// because results hold returned value 
// but we r not returning anything

function addTwoNumbers(number1, number2)//parameter
{
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //result holds returned value
//console.log("result: ", result)

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Anand"))
//console.log(loginUserMessage())//undefined just logged in

//we can give some default values 
//if no values passed "sam" will 
// take the place of username
function loginUserMessage1(username = "Sam"){
    return `${username} just logged in`
}
//console.log(loginUserMessage1());

//shopping cart we dont know how many items 
//user is gonna buy
function calculateCartPrice(...num1){
    //... here is rest operator not spread operator
    return num1
}

//console.log(calculateCartPrice(100, 200, 300));


function calculateCartPrice1(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice1(100, 200, 300, 400, 500));

//("*****passing object to function ****")

const user = {
    username: "Anand",
    price: 199
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

//handleObject(user)
handleObject({
    username: "Sarita",
    price: 743
})

//("******** passing arrays *********")

const myNewArray = [20, 30, 58, 68]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 300, 46, 50]))





