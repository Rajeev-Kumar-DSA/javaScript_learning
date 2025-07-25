const score = 400

const balance = new Number(100)

console.log(score);
console.log(balance);

console.log(balance.toString()) // change in string 
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));  // round off karke value deta hai
console.log(otherNumber.toPrecision(4));

const numberZero = 1000000
console.log(numberZero.toLocaleString());  // by default change in US change, separted with coma
console.log(numberZero.toLocaleString('en-IN')); // change in Indian


/// -------------------- Math ---------------------
console.log(Math);  // Object

console.log(Math.abs(-4)); // only -ve change in +ve

console.log(Math.round(4.3));

console.log(Math.min(4, 3, 2, 8));

console.log(Math.max(4, 3, 2, 8));


console.log(Math.random()); // always value lies in (0 to 1)
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log((Math.random() * (max - min + 1) ));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


