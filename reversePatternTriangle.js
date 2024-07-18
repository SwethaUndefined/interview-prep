// * * * * 
//  * * * 
//   * * 
//    * 


let rowCount = 4;

for(var i=1;i<=rowCount;i++){
    let row = "";
   for(var j=1;j<=rowCount;j++){
     if(j>=i){
        row = row + "* "
     }
     else{
        row = row + " ";
     }
   }
   console.log(row)
}