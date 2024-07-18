// All three are js methods for manipulate with this 

// Call, using call to invoke the func
var obj = {
    fullName : function(){
        return this.firstName + " "+this.lastName
    }
}

var person1 = {
    firstName : "Swetha",
    lastName : "Ragunathan"
}

var person2 = {
    firstName : "Ramya",
    lastName : "Ragunathan"
}

console.log(obj.fullName.call(person1))
console.log(obj.fullName.call(person2))

// Apply, Same as call but we can pass array as another parameters along with object


var obj1 = {
    fullName1 : function(name1,name2){
        return this.firstName + " "+this.lastName + " "+name1+" "+name2
    }
}

var person3 = {
    firstName : "Swetha",
    lastName : "Ragunathan"
}

var person4 = {
    firstName : "Ramya",
    lastName : "Ragunathan"
}

console.log(obj1.fullName1.apply(person2,["Trichy","Tanjore"]))
console.log(obj1.fullName1.apply(person3,[24,"BCA"]))

//bind, will create a new function


var obj2 = {
    fullName2 : function(name1,name2){
        return this.firstName + " "+this.lastName 
    }
}

var person4 = {
    firstName : "Swetha",
    lastName : "Ragunathan"
}
var ans = obj2.fullName2.bind(person4)
console.log(ans())