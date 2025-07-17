const accountId = 1453
let accountEmail = "rajeev@google.com"
var accountPasword = "12345"
accountCity = "Jaipur"  // able to initile the variable without using the keyword, but this is not a good practice

let accountState   // here till now no any value defined so I will get the undefined as a output

// const -> given value ko cannt change
// accountId = 123  // cann't change the const variable again
console.log(accountId);


/*
let and var -> we can change 
let -> 
var -> perfer not to use var keyword, because of issue in block scope and functional scope
        (means for and if condition block)
*/
accountEmail = "check@google.com"
accountPasword = "213243"
accountCity = "Karnataka"

console.table([accountId, accountEmail, accountPasword, accountCity, accountState]) // able to print in tabular formate

