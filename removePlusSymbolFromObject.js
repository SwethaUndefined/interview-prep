let obj = {
    "+41" : "mark1",
    "+44" : "mark2",
    "+48" : "mark3",
    "+43" : "mark4",
}


let extractKeys = Object.keys(obj);

console.log(extractKeys);


const res = extractKeys.map((item)=>{
   return item.slice(1)
})
console.log(res)