//var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20 
    var c = 30
    d = 40
    console.log("inner: ", a);
}


console.log(a);//satisfies scope 
//console.log(b);//satisfies scope
console.log(c); //doesnot satisfy scope
console.log(d); //doesnot satisfy scope

/*
note - global scope of the browser 
and global scope of node(code environment) 
are different
*/