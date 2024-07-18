var a = 10;
var b = a;
console.log(a)
console.log(b)
b = 20;
console.log(a)
console.log(b)
// Shallow Copy, it has own memory and b is stored with seperate memory so when i change the value of b it wont affect a


var arr1 = [1,2,3]
var arr2 = arr1;
console.log(arr1)
console.log(arr2)
arr2.push(4)
console.log(arr1)
console.log(arr2)
// Deep copy, it has reference not value in the memory, so when i change the value in the arr2 it will affect in arr1

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