//1. Remove element “5” from array [1, 2, 3, 4, 5]

var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.pop())
console.log("After Poping", arr1)

//2. Add “f” to the end of the array [“a”,”b”,”c”,”d”,”e”]
var arr2 = ["a","b","c","d","e"]

console.log(arr2[arr2.length] = "f")
console.log("After adding 'f' at the end", arr2)

//3. Find the summation of [27,38,-67,98,-1]

var sumArray = [27,38,-67,98,-1];

var ans = sumArray.reduce((element,accumulator)=>{
    return element+ accumulator
})
console.log("Summation of the array", ans)


//4. Find average salary from the following  [{“id”: 001,”name”:”Villiam”,”salary”:1500},{“id”: 002,”name”:”Stefan”,”salary”:2700},{“id”: 003,”name”:”Jenny”,”salary”:4400}, {“id”: 004,”name”:”Anna”,”salary”:9600}]

var salaryArray = [
    {"id": 1,"name":"Villiam","salary":1500},
    {"id": 2,"name":"Stefan","salary":2700},
    {"id": 3,"name":"Jenny","salary":4400},
    {"id": 4,"name":"Anna","salary":9600}
    ]
    
    var salaries = salaryArray.map((item)=>{
        return item.salary
    })
    var avgSalary = salaries.reduce((element,accumulator)=>{
        return element+accumulator
    })
console.log("Average Salary", avgSalary/salaries.length)  

//5. Calculate the number of vowels and consonants in a string? abstemiously

let vowels =0,consonents = 0;
function CountOfVowelsAndConsonants(str){
    
    for(var i=0;i<str.length;i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
            vowels++;
        }
        else {
          consonents++;  
        }
    }
}

var str = "abstemiously";
CountOfVowelsAndConsonants(str)
console.log("vowels",vowels)
console.log("consonents",consonents)


//6. Reverse the word “Achievement” without using the inbuilt function.

var word = "Achievement";
let reverseAWord = "";
for(var i=word.length-1;i>=0;i--){
    reverseAWord = reverseAWord + word[i]
}
console.log("After reversing the word", reverseAWord)

//7. Sort an array from lowest to highest? [5, 1 , 14, 3, 0, 10, 50, 30 ]

var items = [5, 1 , 14, 3, 0, 10, 50, 30 ];

var sortArray = items.sort((a,b)=>{
    return a - b;
})
console.log("From lowest to highest",sortArray)


//8. Between numbers 1 to 100 print "roanuz" at multiples of 3, "quiz" at multiples of 5 and "sports" at multiples of 3 and 5.


for(var i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("sports")
    }
   else if(i%3==0){
        console.log("roanuz")
    }
    else if(i%5==0){
    console.log("quiz")
    }

}

//9. Write a function that takes 7 and 13 as parameters and returns the sum of all the numbers between them.

function sumOfNumbers(num1,num2){
    var sum = 0;
    for(var i=num1;i<=num2;i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNumbers(7,13))


