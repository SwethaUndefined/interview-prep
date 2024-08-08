//callByValueAndCallByReference



var a = 10;
var b = a;
console.log(a)
console.log(b)
b = 20;
console.log(a)
console.log(b)

var obj = {
    name : "Swetha",
    age : 20
}
console.log(obj)

var obj1 = obj;

obj1.name = "Ramya"
console.log(obj1)


var arr = [1,2,3];
var arr1 = arr;
console.log(arr)
console.log(arr1)

arr1.push(4);
console.log(arr)
console.log(arr1)