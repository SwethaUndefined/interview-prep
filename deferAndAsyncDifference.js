// async:

// Loads script asynchronously.
// Executes as soon as it is available.
// Can interrupt HTML parsing.
// Not suitable for scripts that depend on other scripts or the DOM.



// defer:

// Loads script asynchronously.
// Executes after the HTML document has been parsed.
// Does not interrupt HTML parsing.
// Suitable for scripts that depend on the DOM or other scripts.




// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Async vs Defer Example</title>
// </head>
// <body>
//     <h1>Hello, World!</h1>
    
//     <!-- Script with async attribute -->
//     <script src="async-script.js" async></script>
    
//     <!-- Script with defer attribute -->
//     <script src="defer-script.js" defer></script>
// </body>
// </html>
