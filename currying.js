

function a (a){
  console.log(a);
  return function b(b){
   console.log(b)
  }
}
a(5)(6)



function a(a){
 return function b(b){
    console.log(a+b)
 }
}
a(5)(6)


function a(n1){
  return function b(n2){
    console.log(n1 + n2)
  }
}
a(3)(4)