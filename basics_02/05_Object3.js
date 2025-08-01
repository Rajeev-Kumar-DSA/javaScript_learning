// dstructuring the object

const course = {
    courseName : "JavaScript Lect",
    price : "999",
    courseInstructor : "Rajeev"
}

// Sytax improment - dstructure the object   - (curely bracket means destructing the object)
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);  // key ka destructure


// // - (API data) JSON (Javascript object notation)- key will be string, valuse as per datatype 
// {
//     "name" : "rajeev",
//     "courseName" : "Javascript",
//     "price" : "10"
// }



