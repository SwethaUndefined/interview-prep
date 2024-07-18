console.log(typeof null == typeof undefined) //because typeof null is object and typeof undefined is undefined
console.log(typeof null === typeof undefined) //because typeof null is object and typeof undefined is undefined


console.log(null == undefined)
//JavaScript uses type coercion with the == operator, which means it converts values to the same type 
// before comparing them. According to the language rules, null and undefined are treated as equal with ==. 
// That's why null == undefined evaluates to true."


console.log(null === undefined) //because it checks the type and the value, typeof null is object and typeof undefined
//  is undefined 