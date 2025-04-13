const user = 
{
    userName: "Anand",
    price: 999,

    wecomeMessage: function(){
        console.log(`${this.userName} welcome to website`);
        //console.log(this);
    }
}
// user.wecomeMessage();
// user.userName = "Sam"
// user.wecomeMessage();

//console.log(this); //{} empty object in node environment
//in browser the global object is window object




// function chai(){
// let userName = "anand"
// console.log(this);//"this" works 
//     // in objects not in functions
// }
// chai(this);//undefined




// const chai = function () {
//     let userName = "anand"
//     console.log(this);//similarly yaha bhi undefined
// }
// chai()//undefined




// const chai = () => {
//     let userName = "Anand"
//     console.log(this.userName)
// }
// chai();//undefined



//note- in function run console.log(this) 
// we get same output in the first two
// and in the last arrow function we get empty object 



// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//implicit return //parenthesis- return keyword not required
//const addTwo = (num1, num2) => num1 + num2;

//const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({userName: "Anand"})

console.log(addTwo(5, 2));

//const myArr [2, 3, 4, 5, 6];
//myArr.foreach()





