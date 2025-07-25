
let score = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined

console.log(typeof score);
console.log(typeof(score));

// --- change in number conversion ----
let valueInNumber = Number(score)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)


console.log(typeof valueInNumber);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);  // output - NaN (not possible to convert)


console.log(typeof valueInNumber3);
console.log(valueInNumber3);  


console.log(typeof valueInNumber4);
console.log(valueInNumber4); 


/*
--- when convert in Number -----
"33" =>  33
"33abc" => Nan.  (not a number)
true => 1
false => 0


------ When convert in Boolean -----
1 => Boolean(1) => true
"" => false
"Rajeev" => true

------ When convert in String ------
33 => "33" => string
*/




// *************  Operation *************
let value = 3
let negVal = -value
console.log(negVal);

console.log(2*2);
console.log(2**3); // power of 2^3
console.log(2/3);
console.log(2%3);  // get the reminder value

let str1 = "Hello"
let str2 = " !Bro"
let str3 = str1 + str2

console.log(str3);
console.log("1" + 2);  //12
console.log(1 + "2");   // 12
console.log("1" + 2 + 2);  //122 (convert in string)
console.log(1 + 2 + "2");  // 32  (https://tc39.es/ecma262/#sec-fundamental-objects)  (1:23 -> go to another lecture understand the fundametal)

console.log(true);
console.log(+true);  //1
// console.log(true +);  // wrong - Unexcepted behaviour






// Increment + pre and post -> mdn
// prefix and postfix -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment







