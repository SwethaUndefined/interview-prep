// Promise is a ES6 feature and used for making the js asyncronously.

// 3 states:
//1. Pending
//2. Rejected
//3. Fullfilled

//3 methods to handle the promise:
//1. .then()
//2. .catch()
//3. .finally()

//Exmaple for promise

const promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let success = true;
        if(success){
            resolve("Successfull")
        }
        else{
            reject("Failed")
        }
    })
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Finally")
})


//what is the difference bewtween promise and async/await?

// promise is way of writing the js code asyncronously, when we need to write that code in clean and concise
//manner then uses async/await