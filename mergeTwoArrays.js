

function mergeTwoArrays(arr1,arr2){
    var arr = []
    var maxLength = arr1.length+arr2.length;
    for(let i=0;i<maxLength;i++){
        if(i<arr1.length){
            arr.push(arr1[i])
        }
         if(i<arr2.length){
            arr.push(arr2[i])
        }
    }
    return arr;
}

var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10]
console.log(arr1.concat(arr2))
console.log(mergeTwoArrays(arr1,arr2))