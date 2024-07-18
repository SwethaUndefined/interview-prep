


var arr = [1,2,3,4,5];

var ans = arr.reduce((element,accumulator)=>{
    return element+accumulator
})
console.log(ans)


var arr1 = [1,3,3,4,5,4,6,5,1];

var ans1 = arr1.find((item)=>{
  return  arr1.indexOf(item) === arr1.lastIndexOf(item)
})
console.log(ans1)