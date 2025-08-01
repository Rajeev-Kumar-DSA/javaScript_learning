

// {} -> this is scope (when use for loop with scope)

var c = 300  // data leak happen - this var is able to access inside and outside (if used inside the block)
var a = 400
if(true){
    let a = 10
    const b = 20
    // var c = 30  // here i use var - this should be acceable only for this if else scope, but here able to print c outside the scope, which is incorrect

    console.log("Inner: " , a);
    
}

console.log(a);  //
console.log(b);
console.log(c);  // here c is acceable outside of block scope which is incorrect




