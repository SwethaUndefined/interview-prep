

function findRepeatingCharactersCount(str){
    let charCount = {};
    let maxCount = 0;
    for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1;
        maxCount = Math.max(maxCount,charCount[char])
    }
    return maxCount
}


let str = "abbcccddddeeeee";

var result = findRepeatingCharactersCount(str)
console.log(result)