


function anagramOrNot(str1,str2){
  var item1 = str1.replace(/\s/g,"").toLowerCase().split("").sort().join("");
  var item2 = str2.replace(/\s/g,"").toLowerCase().split("").sort().join("");
  return item1 == item2;
}


console.log(anagramOrNot("param", "rapam")); 
console.log(anagramOrNot("listen", "silent")); 
console.log(anagramOrNot("hello world", "world hello")); 

// function anagramOrNot(str1,str2){

//     var arr1 = str1.split(" ").sort().join(" ")
//     var arr2 = str2.split(" ").sort().join(" ")
//     // console.log(arr1,arr2)
//     return arr1 === arr2;
// }