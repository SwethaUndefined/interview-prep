var arr = [1,2,3,4,4,5,2];

var ans = [...new Set(arr)]
console.log(ans)


var arrr = [1,2,3,4,4,5,2];

var ans1 = arrr.filter((item,index)=>{
    return arrr.indexOf(item) !== index
})
console.log(ans1)