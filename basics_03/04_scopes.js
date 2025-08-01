function one(){
    const userName = "Rajeev"

    function two() {
        const website = "youtube"
        console.log(userName);
    }
    //console.log(website);  // this is not acceable - calling outside
    two()
}

one()  // watch closure lecutre


/// ++++++++++++++++++

// 1. function declarations
addOne(4)  // able to call
// Internally JavaScript sees this first
function addOne(num){
    return num + 1;
}
addOne(5)


// Because this is a function declaration, and JavaScript hoists the entire function 
// (both the name and body) to the top of the scope during the memory phase.


// function expressions - function declare with hold in another variable

addTwo(6)  // this is error - function call before decalre
const addTwo = function(num){ 
    return num + 2
}

addTwo(6)

// Because here you're using a function expression assigned to a const variable.
// What happens during hoisting is:
// - Only the declaration of addTwo is hoisted (not initialized),
// - But since it's a const, it remains in a temporal dead zone until the line where it's actually initialized.

// So trying to use it before initialization throws an error:


/**
| Feature                  | Function Declaration | Function Expression                      |
| ------------------------ | -------------------- | ---------------------------------------- |
| Hoisted?                 | ✅ Fully hoisted      | ❌ Only variable name hoisted (not value) |
| Callable before defined? | ✅ Yes                | ❌ No                                     |
| Common declaration form  | `function name() {}`  | `const name = function() {}`             |
| Used in recursion?       | ✅ Easy               | ⚠ Need named function expression         |
 */


