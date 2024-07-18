// There are several ways to copy an object in JavaScript, each with its own characteristics:

// Using Object.assign:
const obj = { a: 1, b: 2 };
const copy = Object.assign({}, obj);
console.log(copy)


// Using Spread Operator (Shallow Copy):
const obj1 = { a: 1, b: 2 };
const copy1 = { ...obj1 };
console.log(copy1)

// Using JSON.stringify and JSON.parse (Deep Copy):
const obj2 = { a: 1, b: { c: 2 } };
const copy2 = JSON.parse(JSON.stringify(obj2));
console.log(copy2)



// Using Object.create (Prototypal Inheritance):
const obj3 = { a: 1, b: 2 };
const copy3 = Object.create(obj3);
console.log(copy3) // {} is the output, create will create the object only thats copy oft he obj3, need to add the
//value explicitly like

copy3.a = 1;
copy3.b = 3;
console.log(copy3) //{ a: 1, b: 3 }

// Using Object.fromEntries (Modern ES2019+):
const obj4 = { a: 1, b: 2 };
const copy4 = Object.fromEntries(Object.entries(obj4));
console.log(copy4)