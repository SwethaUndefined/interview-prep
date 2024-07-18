

function outerScope(){
   var a = 10;
  return function innerScope(){
     return a + 5;
  }
 }
 var ans = outerScope();
 console.log(ans())








