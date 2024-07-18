
var obj = {
    firstName : "Swetha",
    age : 25
}
Object.freeze(obj);

obj.age = 26;

console.log(obj)