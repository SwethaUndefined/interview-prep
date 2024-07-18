

var obj = {
    name : "Swetha Ragunathan",
    age : 25,
    getInfo : function(){
        return this.name + " "+this.age
    }
}

var newObj = obj.getInfo;
// console.log(newObj())

var ans = newObj.bind(obj)
console.log(ans())


var obj1 = {
    name : "Swetha",
    lastName : "Ragunathan",
    getInfo : function (){
        return this.name + " "+ this.lastName
    }
}

var obj2 = {
    name : "Ramya",
    lastName : "Ragunathan"
}

var ans = obj1.getInfo.bind(obj2)
console.log(ans())