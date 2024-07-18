function removeFalsyValues(arr){
   return arr.filter(Boolean)
}

var arr = [false, null, 0, "", undefined, NaN, 1, 2, 3];
console.log(removeFalsyValues(arr))