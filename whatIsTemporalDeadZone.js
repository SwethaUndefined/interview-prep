//Temporal dead zone

// Temporal dead zone is a concept in javascript and it is the period of time where the let and const are initialized
//but not declared. When we try to access the variable at that time it will through the error. This helps prevent errors by ensuring 
//variables are not used before they are declared.


console.log(a);
var a;
a=10;

console.log(b) // ReferenceError: Cannot access 'b' before initialization
let b;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;