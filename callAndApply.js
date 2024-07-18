    function fn(a,b){
    return a+b
    }
    console.log(fn.call(null,2,5))


    function fn1(a,b,firstName,lastName){
        return a+b + " "+firstName+ " "+lastName
    }
    console.log(fn1.apply(null,2,5,["Swetha","Ragunathan"]))