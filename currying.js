

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


//currying is a technique where we can pass the arguments one at a time and execute that immediately, this processc continues
//untitl the all the arguments are passed. This is usefull for code reusablility, partial completion