
function palindromeOrNot(str){
    return str.split('').reverse().join('');
}
var str = "madam";
var reverseString = palindromeOrNot(str);
if(reverseString == str){
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}