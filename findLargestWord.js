

function findLargestWord(str){
  var splitTheWords = str.split(" ");
  console.log(splitTheWords)
  let longestWord = "";
  for(var i=0;i<splitTheWords.length;i++){
    if(splitTheWords[i].length>longestWord.length)
        longestWord = splitTheWords[i]
  }
  return longestWord;
}


var str = "I love Javascript findLargestWord"
console.log(findLargestWord(str))