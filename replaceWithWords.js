let sentence = "the catter is a ratter and a tatter";
const arr = ["cat", "rat", "tat"];


var sentenceToArray = sentence.split(" ");

var result = sentenceToArray.map((item)=>{
   arr.forEach  ((arrItem)=>{
    if(item.includes(arrItem)){
     item = arrItem
    }
   })
   return item
})
let newSentence = result.join(" ");
console.log(newSentence);