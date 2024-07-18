//explain the this keyword with the arrow fucntion and normal function

//In normal function  binding of this, but in arrow function no binding with this

//arrow function syntax is more readable thatn normal function 



const obj = {
    name: 'John',
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};

console.log(obj.greet()); 



const obj1 = {
    name: 'John',
    greet: () => {
        return `Hello, ${this.name}!`;
    }   
};

console.log(obj1.greet()); //Hello, undefined!  because no binding of this



// Arrow functions do not bind their own this context; instead, they inherit this from their 
// lexical (surrounding) scope.



//main difference between arrow and regular function is this keyword and syntax is more readable in arrow
// function than regular function. in regular function this binds with the respective object, in arrow this binds 
// with the global object


//Arrow functions prevent the common issue of this referring to unexpected objects,
// especially in nested functions or callbacks