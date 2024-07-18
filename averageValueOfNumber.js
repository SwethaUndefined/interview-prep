


function averageValueOfNumber(arr){
   return arr.reduce((element,accumulator)=>{
    return element+accumulator /arr.length
   },0)
}
var arr = [1,2,3,4,5]
console.log(averageValueOfNumber(arr))