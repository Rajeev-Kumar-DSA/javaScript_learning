console.log(2>1);  // output - boolean value
console.log(2>=1)


//-------- Before compare - make sure both side of value of datatype should be same
console.log("2" > 1);  // true
console.log("02" > 1);  // true (automatically convert here, but its not a good way)



// Avoid the below comparision ---

console.log(null == 0);  // false
// when comparisions convert null to a number, treating it as 0. that's why null >= 0 is true, null > 0 is false
console.log(null > 0);   // false. // 
console.log(null >= 0); // true

console.log(undefined == 0);  // false
console.log(undefined >= 0);
console.log(undefined > 0);



// === -> value with data type check
console.log("2" === 2);
console.log("2" == 2);






