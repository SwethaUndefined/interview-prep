function removeDuplicatesAndGiveUniqueValue(arr){

    // var removeDuplicates = [...new Set(arr)]
    // console.log(removeDuplicates)
    var uniqueValue = arr.find((item)=>{
        return arr.indexOf(item) === arr.lastIndexOf(item)
    })
    console.log(uniqueValue)
}

var arr = [1,2,3,4,4,3,2];
removeDuplicatesAndGiveUniqueValue(arr)