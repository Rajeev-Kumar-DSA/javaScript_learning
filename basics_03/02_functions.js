// when function argument will not limit (like online shopping )

// rest operator (spread operator)
function calculateCartPrice(...number){
    return number
}

console.log(calculateCartPrice(100, 200, 300, 400));  // help of tripal dot, return type will be array


function calculateCartPrice2(num1, num2 ,...number){
    return "num1 : "+ num1 + " num2 : " + num2 + " number : "+number
}
console.log(calculateCartPrice2(100, 200, 300, 400, 500, 600));


// object handle in function
const user = {
    userName : "rajeev",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);    
}
handleObject(user)
handleObject({
    userName : "Raushan",
    price : 300
})


const array = [100, 200, 300, 400]

function handleArray(getArrayValue){
    return getArrayValue[2];
}
console.log(handleArray(array));
console.log(handleArray([8000, 90000, 2, 3]));


