

// firstLetterOfEachWordIsCapital

// var str = "hello, how are you?";

// var ans  = str.split(" ");
//  var result =  ans.map((item)=>{
//     return item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()
//    })
// console.log(result.join(" "))   





var str = "hello, how are you?";

var ans = str.split(' ');

var res = ans.map((item)=>{
    return item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()
})
console.log(res.join(' '))