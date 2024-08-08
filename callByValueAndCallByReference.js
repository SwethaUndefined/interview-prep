// Call by value and call by reference

// Call by value works with copy of the original value
// When i change the function, it does not affect the original


// call by reference works with reference of the original value
// When i change the function, it will affect the original



//Call by value

function changeValue(a) {
    a = 10;
  }
  
  let x = 5;
  changeValue(x);
  console.log(x); // Output: 5


//call by reference 
  function changeObject(obj) {
    obj.name = "New Name";
  }
  
  let person = { name: "Old Name" };
  changeObject(person);
  console.log(person.name); // Output: New Name
  
  