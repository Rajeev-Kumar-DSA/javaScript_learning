
function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("V");
}

// sayMyName  // - without pranthesis means its reference   // output will blank
// sayMyName()  // - along with pranthesis means its execute   // give the output

function addTwoNumbers(number1, number2){  //funtion with paramerter
    console.log(number1 + number2);
    
}

addTwoNumbers()  // output - NaN. (because without argument value)
addTwoNumbers(3, 4)
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")

// const result = addTwoNumbers(3, 5)
// console.log(result);  // undefined

// ---------------------
function addTwoNumbers2(number1, number2){
    let result = number1 + number2
    return result
}

const result1 = addTwoNumbers(5, 6)
// console.log("Result: ", result1);


function loginUserMessage(userName){
    if(userName === undefined){
        console.log("Please enter a valid userName");
        return
    }
    return `${userName} just logged in system`
}

console.log(loginUserMessage("Rajeev"))
console.log(loginUserMessage())  // here parameter not assign - // output - undefined


// when overide the value
// raj will print when will not pass any value in parameter (blank)  => avoid the undefined output
// when pass the value that time overide the value
function loginUserMessage2(userName = "raj"){
    if(userName === undefined){
        console.log("Please enter a valid userName");
        return
    }
    return `${userName} just logged in system`
}

console.log(loginUserMessage2());
console.log(loginUserMessage2("Raushan"));
