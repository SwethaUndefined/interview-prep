var arr = [1,2,3,4,5];

console.log(arr.slice(1,2))
console.log(arr.splice(1,2))
console.log(arr)


// Slice will not mutate the original array and Splice method will mutate the original array

// slice will extract that value but splice will remove that value
// splice - first arg is starting index, 2nd is counts to delete from starting index and third is adding values(optional)
// slice - first arg is starting index and 2nd is last index


var arr1 = [2,3,4,6,7,8,9];

console.log(arr1.slice(1,3))
console.log(arr1.splice(2,3))
console.log(arr1)