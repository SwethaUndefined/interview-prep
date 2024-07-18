//Function Declaration

Declaration()
function Declaration(){
    console.log(10)
}

// Function Declaration is hoisted so i can able to access the function above the actual function is defined


//Function Expression

// expression()  throws an error as Cannot access 'expression' before initialization because it is not hoisted
const expression = function(){
    console.log(20)
}

// Function Expression is not hoisted so i cant able to access the function above the actual function is defined
