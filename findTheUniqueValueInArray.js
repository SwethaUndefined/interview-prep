

function findTheUniqueValueInArray(arr){
  
   return arr.find((item)=>{
      return arr.indexOf(item) === arr.lastIndexOf(item)
   })
}

var arr = [1,2,3,4,5,2,3,4,5];
console.log(findTheUniqueValueInArray(arr))