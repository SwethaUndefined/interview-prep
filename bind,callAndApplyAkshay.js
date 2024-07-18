let printFullName = function (state,numbers){
    console.log(this.firstName + " "+this.lastName+" "+state+" "+numbers)
}

let name1 = {
firstName : "Swetha",
lastName : "Ragunathan",
}
let name2 = {
firstName : "Sachin",
lastName : "Tendulkar",
}
printFullName.call(name1)
printFullName.call(name2)
printFullName.call(name2,"Mumbai")
printFullName.apply(name2, ["Mumbai", [1, 2, 3]]);

let myfullname = printFullName.bind(name2, "Mumbai", [1, 2, 3]);
console.log(myfullname)
myfullname()
//only difference between call and bind is bind will have the copy of the method and use it later and it will return a function

// Call method is for invoke the function directly by passing in the reference which points to this variable, in apply also 
//same but we can pass the array as arguments. Bind method will not invoke the function directly but gives the copy of the method
// and invoke it later.