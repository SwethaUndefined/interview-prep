//removeDuplicatesFromTheArrayAndCountNumberOfDuplicates


var arr = [1,2,4,2,5,7,1];

var ans = arr.filter((item,index)=>{
    return arr.indexOf(item) !== index
})
console.log(ans.length)