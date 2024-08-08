//when a response is sent from server to browser what gets load frist, js or css or html

// HTML - loads first to build the DOM
// CSS - will add the styles to the DOM
// JS -  will loaded either block the html parsing or wait for html parsing, depending on the script attributes.


//script attributes:

//defer and async:

// No "defer and async" = blocks html parsing until script the executed
// defer = not block the html parsing; executes after the html is parsed
// async = not block the html parsing; executes as soon as the script is downloaded, potentially before HTML parsing is complete.