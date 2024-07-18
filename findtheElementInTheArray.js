
function findtheElementInTheArray(arr,num){

    const index = arr.indexOf(num);
    return index !== -1 ? index : -1
 }


 function findtheElementInTheArray(arr,num){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==num){
            return arr[i];
        }
    }
    return -1
 }
 
 var arr = [1,2,3,4,5,6,7,8]
 
 console.log(findtheElementInTheArray(arr,4))