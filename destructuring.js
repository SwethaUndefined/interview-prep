//Array Destructuring

var arr =  [1,2,4];
var [a,b,c] = arr;
console.log(a)
console.log(b)
console.log(c)


//Object destructuring

var obj = {firstName : "Swetha",age : 24}

const {firstName,age} = obj;
console.log(firstName)
console.log(age)

var obj1 = {
    a1 : "Swetha",
    b1 : 24,
    obj2 : {
        lastName : "Ragunathan"
    }
}

const{a1,b1,obj2: { lastName }} = obj1;
console.log(a1)
console.log(b1)
console.log(lastName)


var arra = [1,2,3,4,5];

const [one,two,three,four,five] = arra;
console.log(one,three,two,four,five)


var obj = {
    firstName1 : "Swetha",
    lastName1 : "Ragunathan"
}

const {firstName1,lastName1} = obj
console.log(firstName1,lastName1)

var obj1 = {
    firstName2 : "Swetha",
    lastName2 : "Ragunathan",
    obj3 : {
        age2 : 24
    }
}

const{firstName2,lastName2,obj3 :{age2}} = obj1;
console.log(firstName2,lastName2,age2)