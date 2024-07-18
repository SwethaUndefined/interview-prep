console.log("5"+2);
console.log("5"-2);

console.log("5"==5)
console.log("5"===5)

console.log(typeof NaN); 

//convert to number
var a = "12";
console.log(parseInt(a))

var b = "Hi";
console.log(parseInt(b))

console.log(NaN === NaN) 
//comes as false, because NAN can be of any string, may be "hi" or "hello"
// that is the reason


console.log(1<2<3);
console.log(3>2>1);
// True
// false
// first one is true, because 1<2 condition satisfied so it becomes true, now compare the true with <3 means true becomes 1
//so 1<3 is true, so the answer is true
// second one is false, because 3>2 condition satisfied so it becomes true, now compare the true with >1 means true becomes 1
//so 1>1 becaomes false, so the answer is false.