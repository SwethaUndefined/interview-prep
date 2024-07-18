

// Question 1
declaration();
// expression();

// This will hoisted so it will print Calculating..... in console but in expression function not hoisted with arrow function
function declaration(){
    console.log("Calculating.....")
}

const expression = ()=>{
    console.log("Again Calculating.....")
}


//Question 2

for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },100)
}
// This will print 3 three times, why because var has function scope and it is in closure, so setTimeOut i have the access
//of for loop

//If I want to print 0,1,2...need to change the var to let, because let is a block scope

for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },100)
}


//Question 3
function func1(){
    setTimeout(()=>{
      console.log(x);
      console.log(y);
    },3000);
  
    var x = 2;
    let y = 12;
  }
  func1();

  //This will print 2 and 12 after 3000, even though let cant be hoisted it will print. Because of async nature, the function
  // will run immediately not wait for 3000
  // because of closure, 
//   In this code snippet, we have a function func1 that defines a setTimeout callback. Let's break down what happens step by step:

// Function Execution: When func1 is called, it enters the execution context.

// Variable Declarations:

// var x = 2;: A variable x is declared using var and initialized to 2. Variables declared with var are function-scoped, meaning they are hoisted to the top of the function and initialized with undefined until assigned a value.
// let y = 12;: A variable y is declared using let and initialized to 12. Variables declared with let are block-scoped and are not hoisted.
// setTimeout Callback:

// Inside the setTimeout callback, there are two console.log statements attempting to log the values of x and y.
// Closure and Lexical Environment:

// Both x and y are captured by the closure created by the arrow function passed to setTimeout.
// The closure captures the references to x and y in the lexical environment in which it was created.
// setTimeout Execution:

// The setTimeout function schedules the execution of its callback after 3000 milliseconds.
// At this point, x has been assigned the value 2, and y has been assigned the value 12.
// Logging Values:

// After 3000 milliseconds, the setTimeout callback executes.
// When attempting to log x, it prints 2. Since x was declared with var, it is function-scoped and accessible within the callback.
// When attempting to log y, it prints 12. Since y was declared with let, it is block-scoped and accessible within the callback due to the closure capturing its lexical environment.
// In summary, both x and y are accessible within the setTimeout callback, with x being accessed via the closure and y being accessible due to its block scope.


  //Question 4

  function func2(){
    for(var i = 0; i < 3; i++){
      setTimeout(()=> console.log(i),2000);
  }
  }
  func2();

  // 3 will print three times because of var. Var is a functional scope

//Question 5

(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
  })();
// 2,4,3 and 1 is printed


//Question 6
function runFunc(){
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
  }
  runFunc();
// 11, NAN, 2-22, NAN, Hello78

//Question 7

let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));

//true, false is printed because 0 and false are same, if  === checks both type and value. 0 is number and false is 
//boolean

//Question 8

var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})(); 

// NAN

// Question 9

let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  let getPower = hero.getPower;
  let hero2 = {powerLevel:42};
  console.log(getPower());
//   console.log(getPower.apply(hero2));


  // Question 10

  const a = function(){
    console.log(this);
  
    const b = {
      func1: function(){
        console.log(this);
      }  
    }
  
    const c = {
      func2: ()=>{
        console.log(this);
      }
    }
  
    b.func1();
    c.func2();
  }
  
  a();

  // this printed in global scope