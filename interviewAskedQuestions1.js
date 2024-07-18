
function printNumbersArray(start,end,result=[]){
  if(start<=end){
    result.push(start);
    printNumbersArray(start+1,end,result)
  }
  return result
}
  const numbersArray = printNumbersArray(1, 5);
  console.log(numbersArray);
  
  const arr = [
      { price: 1 },
      { price: 2 },
      { price: 3 }, 
      { price: 4 },
      { price: 5 }
      ]
  
  let ans = arr.reduce((a,b)=>{
      return {price : a.price+b.price}
  }) 
  console.log(ans)  
  
  
  function outerFunc(callback) {
    return function() {
      setTimeout(callback, 3000);
    };
  }
  
  const callback = () => {
    console.log("Callback....");
  };
  
  outerFunc(callback)();
  
  
  
  
  
  
  