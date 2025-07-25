const marvel_heros = ["IronMan", "Thor", "SpiderMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

// marvel_heros.push(dc_heros)  // Array ke inside new array , kyuki usko ek data lekar push kiya hai
// console.log(marvel_heros[3][1]);


const all_heros = marvel_heros.concat(dc_heros)  // add prefectly
console.log(all_heros)

// use the spread operator  , instead of using the concate we can use the spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)


const array2 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const useableArray2 = array2.flat(Infinity) //change in 1D arrya
const useableNewArray2 = array2.flat(2) 

console.log(useableArray2);
console.log(useableNewArray2);

// change in array - 
console.log(Array.isArray("Rajeev"));

// convert in array
console.log(Array.from("Rajeev"));   // output - [ 'R', 'a', 'j', 'e', 'e', 'v' ]

// Convert object to array -> object me key, values
console.log(Array.from({from : "Rajeev"}));  // here we did not decide the key will change in array or value, by default return will empty array
// Output - []

// Array.from() only works properly with:
// Array-like objects → have a length property (like arguments, NodeList)
// Iterables → like strings, Sets, Maps
// But { from: "Rajeev" } is just a plain object, NOT iterable and NOT array-like (no length).
// So Array.from() sees no length, creates an empty array → [].

// ❌ Why can’t you “decide the key” in Array.from()?
// Because Array.from() doesn’t work with plain objects by default—it expects iterables or array-like objects.

// If you want to extract keys/values from an object, you must use Object.keys(), Object.values(), or Object.entries().


const obj = { from: "Rajeev" };
console.log(Object.keys(obj));   // ['from']
console.log(Object.values(obj)); // ['Rajeev']


// instead of 'from' we can use the 'of'
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


