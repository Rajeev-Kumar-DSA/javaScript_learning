"use strict";  // treat all JS code as newer version (compiler will not use the old version)

// javascript - browser ke anadar hide hai
// alert(3+3) // we are using nodejs, not browser. 

// Help link - 
//  https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
//  https://tc39.es/ecma262/#sec-fundamental-objects

// Data type -
/*
--- premitive data type -----
number => 2 to power 53
bigint
string => ""
boolean => true/false
null => its a standalone value -> empty value ka reperesentation hai, (this is type of object) 
        (best example of uses - suppose we are requesting to give the temparture value, but same time have some server issue came, 
        if we will give the return as 0, its a temparture value, but unfortunately we didnt recevie the any response because of 
        server issue, in this time instead of 0 use the null -> we recive the empty value )
undefined => variable is decalre but value not assigned (for this type is undefined)
symbol => uniqueness defined

*/

// -- Object ---

let name = "Ram";
let age = 26

console.log(typeof age)
console.log(typeof undefined);  // type is undefined
console.log(typeof null);  // type is object





