//restAndSpreadOperator

// Spread Operator
var arr = [1,2,3,4];
var ans = ["Swetha","Ramya",...arr];
console.log(ans)


// Rest Operator

const findLength = (...param)=>{
  return param.length;
}
console.log(findLength(2,3,4))
console.log(findLength(2,3,4,5,6,7))
console.log(findLength(2,3))
console.log(findLength(2))
console.log(findLength())

// Rest and spread operator are syntax wise looking like same. but they are for different purposes. When need to iterate the
//array in any place, we use spread operator and when we dont know how many arguments may come that time we can use
//rest operator