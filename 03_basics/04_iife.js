//Immediately Invoked Function Expressions (IIFE)
//iife used to get rid of global scope pollution
//by global scope variables

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})(); //semicolon imp here to end the context



( (name) => {
    //unnamed IIFE
    console.log(`DB connected two ${name}`);
})("Anand");