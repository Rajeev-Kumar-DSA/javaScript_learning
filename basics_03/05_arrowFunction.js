const user = {
    userName : "rajeev",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);  // jo bhi current value hoga usko update karega
        
    }
}


// this - current scope ke value ko refer karne ke liye

user.welcomeMessage()
// change the userName
user.userName = "Rajjo"
user.welcomeMessage()  // change will effect


console.log(this);  // empty return - empty object (because we are in node enviroment, that's why empty object)
// jab browser me run karega tab hume window return hoga (because window is my gloable object inside the browser)


// --------------
// function chai(){
//     let userName = "Rajeev"
//     console.log(this);  
//     console.log(this.userName);  // undefined  
// }
// chai()

// - arrow function
const chai = () => {
    let userName = "Rajeev"
    console.log(this);  // blank object
    console.log(this.userName);  // undefined  
}

chai()


// Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5, 6));


// Implecit return 
// const addTwo2 = (num1, num2) => num1 + num2
const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo(5, 11));

// curely bracket me return keyword mentions is mendatory
// pranthesis me don't write return keyword 


/// ---- return object
const addTwo3 = (num1, num2) => {userName : "Rajeev"}
console.log(addTwo3(5, 11));  // can the return object this way (output - undefined)

const addTwo4 = (num1, num2) => ({userName : "Rajeev"})
console.log(addTwo4(5, 11));  // when returning the object its mandatory to write the pranthesis (output - { userName: 'Rajeev' })





