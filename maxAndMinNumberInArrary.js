var arr = [1,3,55,78,44,90,22,2,1]


//Find Max
var max = arr.sort((a,b)=>{
    return a-b;
});
console.log(max[arr.length-1])


//Find Mini

var min = arr.sort((a,b)=>{
    return a-b;
});
console.log(min[0])