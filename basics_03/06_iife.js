// IIFE (Immediately Invoked Function Expressions)
// Immediately run my function once run my object
// surronded with pranthesis

(function chai(){
    console.log(`DB Connected`);
})();

/**

This creates a function expression, wrapped in () so that JavaScript treats it as an expression, not a declaration.

(function() {
  // function definition
})();
//   ↑ function call


Why use IIFE?
To create a private scope (prevent global variable pollution)

Syntax	(function(){ })(); or (() => {})();

 */

// ()();  // first pranthesis for function code, second for immediate run, semicoln is madatory to use here (if not use tab kaha tak me end karna woh nahi milta hai )
// jab multiple use karega tab ke liye hume semicoln use karna hoga

/**
 * error - when use multiple IIFE without terminate (means not use semicolon)
 * (function chai() {
TypeError: (intermediate value)(...) is not a function
 */

(function chai() {
    // named IIFE
    console.log(`DB Connected`);
})();

((name) => {
    // Unnamed IIFE
    console.log(`DB Connected 2 ${name}`);
})("Rajeev");



(() => {
    console.log(`DB Connected 3`);
})()







