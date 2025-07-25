// Stack memory. --> primitive type of datatype

// Heap memory.  -> Non primitive data type

let myName = "Rajeev"

let anotherName = myName  // here will get the copy of value
anotherName = "Raushan"

console.log(myName);
console.log(anotherName);


let userOne = {
    email : "rajeev@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne  // here will get the heap memory, hume reference milega memory ka, both place me update hoga, because we are changing the original value
userTwo.email = "raushan@gmail.com"
console.log(userOne);
console.log(userTwo);

