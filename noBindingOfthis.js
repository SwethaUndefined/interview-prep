

var obj = {
    name : "Swetha",
    age : 25,
    getInfo : function(){
        return this.name + " "+ this.age
    }
}
console.log(obj.getInfo())
//The above example is binding with this

var obj1 = {
    name1 : "Swetha Ragunathan",
    age1 : 25,
    getInfo : ()=>{
        return obj1.name1 + " "+ obj1.age1
    }
}
console.log(obj1.getInfo())
//The above is for no binding of this 