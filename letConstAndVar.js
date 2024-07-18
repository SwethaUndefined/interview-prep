// console.log(y);
// var y = 10;


// console.log(z);//ReferenceError: Cannot access 'z' before initialization
// let z = 10; 

// console.log(x);//ReferenceError: Cannot access 'x' before initialization
// const x = 10; 

//because with var, hoisting concept works, not works in let and const

var a = 1;
var a = 2
console.log(a)

//Reinitialization is possible

// let b = 1;
// let b = 2;
// console.log(b) //SyntaxError: Identifier 'b' has already been declared

// const c = 1;
// const c = 2;
// console.log(b) //SyntaxError: Identifier 'c' has already been declared



var d = 10;
(()=>{
    var d = 20;
    console.log(d)
}) ()

//function scope

let e = 10;
(()=>{
    let e = 20;
    console.log(e)
}) ()

(()=>{
    const f = 20;
}) ()
console.log(f)//error
