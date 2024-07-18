// The Browser Object Model (BOM) refers to the objects provided by the browser to interact with the browser itself,
// beyond just the content of the webpage (which is handled by the Document Object Model, or DOM). The BOM allows
// access and manipulation of the browser window, history, location, and more.


// Key BOM Objects and Their Hierarchy:

// Window Object:
// The top-level object in the BOM hierarchy. It represents the browser window or frame that contains a DOM document. All global JavaScript objects, functions, and variables automatically become members of the window object.
// Examples: window.alert(), window.setTimeout(), window.location.


// Navigator Object:
// Provides information about the browser.
// Examples: navigator.userAgent (to get the browser user agent string), navigator.language (to get the browser's language).

// Screen Object:
// Provides information about the user's screen.
// Examples: screen.width, screen.height.

// History Object:
// Provides access to the browser's session history.
// Examples: history.back(), history.forward().

// Location Object:
// Represents the URL of the current document and allows for navigation to new URLs.
// Examples: location.href (to get the URL of the current page), location.assign('http://example.com') (to navigate to a new page).

// Document Object:
// Represents the HTML document loaded in the window. It is technically part of the DOM but is accessed via the BOM.
// Examples: document.getElementById(), document.querySelector().

// ==================================================================================================================

// Key Differences b/w dom and bom:
// Purpose: BOM focuses on providing JavaScript access to browser-specific features and functionalities outside 
// the document content, whereas DOM focuses on representing the structure and content of HTML documents 
// for manipulation.

// Components: BOM includes objects like window, navigator, screen, location, and history for browser and environment
//  interaction. DOM includes objects like document, Element, Node, and Event for representing and manipulating 
// document structure and content.

// Manipulation Scope: BOM manipulates browser windows, navigation history, and screen properties. DOM manipulates 
// the structure, content, and styling of HTML documents displayed in the browser.