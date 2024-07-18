

var obj1 = {
    name : "Swetha",
    age : 25,
    data : function(){
      return this.name + " "+this.age
    }
}
console.log(obj1.data())


var obj2 = {
    name : "Swetha",
    age : 25,
    data : ()=>{
      return obj2.name + " "+obj2.age
    }
}
console.log(obj2.data())