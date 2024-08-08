let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  var newArr = [];
  var secondArr = [];
  
  for(var i=0;i<arr.length;i++){
      newArr.push(arr[i][i]);
      secondArr.push(arr[i][arr.length-1-i]);
  }
  
  console.log(newArr,secondArr)
  let mergeArr = newArr.concat(secondArr)
  const result = mergeArr.reduce((ele,acc)=>{
      return ele+acc;
  })
  console.log(result)