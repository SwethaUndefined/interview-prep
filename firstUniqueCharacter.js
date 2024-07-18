

function firstUniqueCharacter(str){
    const charCount = {};
    for(var i=0;i<str.length;i++){
        const char =  str[i];
        charCount[char] = (charCount[char]||0) +1;
    }
    for(var i=0;i<str.length;i++){
        const char =  str[i];
        if(charCount[char] === 1){
            return char;
        }
    }
    return -1;
}


let str = "leetcode"
console.log(firstUniqueCharacter(str))