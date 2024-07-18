var obj = {
    name : "Swetha",
    age : 25
}

Object.freeze(obj)
obj.name = "Ramya"
console.log(obj)