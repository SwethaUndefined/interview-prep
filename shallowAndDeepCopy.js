
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { ...obj1 }; // Shallow copy
obj2.b.c = 3;
console.log(obj1); // Output: 3 (affected because of shared reference)


let obj3 = { a: 1, b: { c: 2 } };
let obj4 = JSON.parse(JSON.stringify(obj1)); // Deep copy
obj4.b.c = 3;
console.log(obj3.b.c); // Output: 2 (not affected)


// Shallow copy duplicates the object properties and copy the reference of the nested object. so when we change anything 
//in the nested object it will affect the original object too.


//Deep Copy duplicates the object properties and copy the nested object. so when we change anything 
//in the nested object it wont affect the original object.