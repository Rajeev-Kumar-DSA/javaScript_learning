// Sigletone - jab constructor se banega object
// Object.create


// Object literals
// by default always string ke trah acept karta hai, no need to mark as string

const mySys = Symbol("key1")

const jsUser = {
    name : "Rajeev",
    "age" : 18,
    "full Name" : "Rajeev Kumar",
    mySys1 : "mykey1",
    [mySys] : "myKey2",
    location : "Bangalore",
    email : "rajeev@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mon", "Sat"]
}



console.log(jsUser.email)
console.log(jsUser.age);
// console.log(jsUser[email]);  // ReferenceError: email is not defined
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);  // we can't be able to access the full name using the dot ('.') process

// we are not using the as a symbol
console.log(jsUser.mySys1);
console.log(typeof jsUser.mySys1);
// if want to use with symbol
console.log(jsUser[mySys]);  // when will use the squre bracket in object then
console.log(typeof jsUser[mySys]);  // now I am accessing the value as a symbole
// ✅ typeof is showing "string" because the value stored under the Symbol key is a string, not the Symbol itself.

jsUser.email = "rajeev@google.com"
// Object.freeze(jsUser)
jsUser.email = "rajeev@microsoft.com"  // this commend will not run for jsUser because its freeze mode
console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this["full Name"]}`);
    
}

console.log(jsUser.greeting);  // undefined
console.log(jsUser.greeting()); 
console.log(jsUser.greeting2()); 

// Why Symbol keys behave differently?
// Symbol is a unique and hidden key.
// When you define an object property with a Symbol, it does NOT become a normal string key.
// Dot notation (obj.key) only works with string keys, NOT Symbols.
// So to access it, you must use square brackets with the Symbol reference.

// jsUser.email works because email is a string key.
// jsUser["full Name"] works because it’s a string with space. Dot notation can’t handle spaces.
// jsUser[mySys] works because mySys is a Symbol, and you must use square brackets.
// jsUser.mySys would NOT work because there is no string key "mySys".

/**
 * 
// Quick example for Using the Symbol
// So the typeof depends on what you stored as the VALUE, not on the fact that the KEY is a Symbol.

const symKey = Symbol("secret");

const obj = {
  [symKey]: Symbol("hiddenValue") // storing another symbol as VALUE
};

console.log(typeof symKey);          // "symbol" (key)
console.log(typeof obj[symKey]);     // "symbol" (value, because we stored a symbol)


 */






