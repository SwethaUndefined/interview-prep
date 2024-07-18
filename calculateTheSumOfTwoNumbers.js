
function sumOfTwoNumbers(arr,num){
   var pairs= [];
   for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==num){
        pairs.push([arr[i],arr[j]])
      }
    }
   }
   return pairs;
}


var arr = [1,2,3,4,5,0,6,0,5,3,2,1];
arr = [...new Set(arr)]
console.log(sumOfTwoNumbers(arr,5))




function removeDuplicates(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

var array = [1, 2, 2, 3, 4, 4, 5];
var uniqueArray = removeDuplicates(array);
console.log(uniqueArray); 
