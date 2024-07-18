var arr = ["S","W","E","T","H","A"];
var str = "Swetha";
console.log(arr.reverse())
console.log(str.split('').reverse().join(''))



var str = "swetha";
var reverseStr = ""
for(var i=str.length-1;i>=0;i--){
   reverseStr = reverseStr + str[i]
}
console.log(reverseStr)

