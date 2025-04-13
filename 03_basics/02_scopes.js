//var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20 
    var c = 30
    d = 40
    //console.log("inner: ", a);
}


//console.log(a);//satisfies scope 
//console.log(b);//satisfies scope
//console.log(c); //doesnot satisfy scope
//console.log(d); //doesnot satisfy scope

/*
note - global scope of the browser 
and global scope of node(code environment) 
are different
*/

function one(){
    const userName = "Anand"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    //console.log(wesite);
    //two()
}
//one()

//************  interesting *********//
console.log(addOne(5)) //works fine even when 
// we have called the function before declaring it
function addOne(num){
    //this is function
    return num + 1
}

console.log(addTwo(5)) //wont work because
//of the way in which we have declared the function
//concept of hoisting
const addTwo = function(num){
    //this one called function expression
    return num + 2
}

/* JavaScript hoists function declarations to the top of their scope, meaning
The whole function is available before it's even written.
So, addOne() is ready to use before the interpreter reaches its definition.

const addTwo = function(num) {...} is NOT hoisted like a regular function.
 */

