//const tinderUser = new Object() //singleton object
const tinderUser = {} //non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Anand"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "Anand@google.com",
    fullName: {
        userFullName: {
            firstName: "Anand",
            lastName: "Prajapati"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)
//console.log(regularUser.fullName?.userFullName.firstName) 
// question mark means if 
// fullName is there then do this if not then do this 

console.log("**********************************");

//merging or combining objects

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2) //{}optional
//{} shows the target if kewal obj1, obj2 
// likha hota then obj1 will act like the 
// target and it will actually be eqaul to obj3

const obj3 = {...obj1, ...obj2} //no lafda of target
//console.log(obj3);
//console.log(obj1);//remains the same no modification 

const users = [
    {
        id: 1,
        email: "A@gamil.com"
    },
    {
    }
]

console.log(users[0].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //array
console.log(Object.values(tinderUser)); //array
console.log(Object.entries(tinderUser)) //every key value pair as an array element

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//true

console.log("************ destructuring ***********")

const course = {
    courseName: "js in Hindi",
    prince: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

// const navbar = ({ company, location, yearFounded, founder }) => {
//     console.log(`Welcome to ${company}`);
//     console.log(`Location: ${location}`);
//     console.log(`Founded in: ${yearFounded}`);
//     console.log(`Founder: ${founder}`);
// }

// navbar({
//     company: "Zomato",
//     location: "Gurgaon",
//     yearFounded: 2008,
//     founder: "Deepinder Goyal"
// });

// {
//     "name": "Anand",
//     "courseName": "js in Hindi",
//     "price": "free"
// }

//sometimes we get api in the form of array
[
    {},
    {},
    {}
]

//jason formatter to understand api responses



