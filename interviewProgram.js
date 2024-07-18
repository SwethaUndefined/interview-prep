var str = "searchBoxKeyAnd";

// output = search_Box_Key



// Using regular expression with replace method
var transformedStr = str.replace(/([a-z])([A-Z])/g, '$1_$2');

console.log(transformedStr); // Output: search_Box_Key




