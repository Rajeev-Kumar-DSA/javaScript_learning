//Sigletone


// const tinderUser = {}  //this is object literals (Non-singletone)


const tinderUser = new Object()  // this is singletone object
tinderUser.id = "123abd"
tinderUser.name = "rammy"
tinderUser.idLoggedIn = false

// console.log(tinderUser);

// Object inside one more object
const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "rajeev",
            lastName : "kumar"
        }
    }

}

// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName);


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "d"}

const obj3 = {obj1, obj2}

const obj4 = Object.assign(obj1, obj2)
const obj5 = Object.assign({}, obj1, obj2)  // correct way to write the combine the object, as per syntex, empty object ko as a target assume karega remain will be source

// spread process
const objNew = {...obj1, ...obj2}

console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(objNew);


console.log(Object.keys(tinderUser));  // return in array type  - [ 'id', 'name', 'idLoggedIn' ]
console.log(Object.values(tinderUser));  // [ '123abd', 'rammy', false ]

console.log(Object.entries(tinderUser));  // 2D array - [ [ 'id', '123abd' ], [ 'name', 'rammy' ], [ 'idLoggedIn', false ] ]

// when value present or not
console.log(tinderUser.hasOwnProperty('idLoggedIn'));   // true
console.log(tinderUser.hasOwnProperty('idLoggedOff'));   // false

