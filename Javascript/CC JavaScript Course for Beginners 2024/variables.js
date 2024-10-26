var firstName = "Max";
let lastName = "Avdenja";

const CHRISTMAS2024 = "12.25.2024";

// Primitives

let favouriteFruit = "strawberries";
let favouriteIceCream = "chocolate";

let numberOfDonuts = 12;
let pi = 3.14

let veryLargeNumber = 123213232132132312314;

let lovesCoding = true;

let favouriteColor; // Undefined

favouriteFruit = null; // Use this to clear var from previous val

let course = {
    name: "Javascript for beginners",
    hours: 3
}

console.log(course)
console.log(course.name)

course.name = "JavaScript Fundamentals";
console.log(course.name)

let property = "hours";

console.log(course[property]); // Another way to reach properties of an object, use-case example

let productColors = ["blue", "green"]; // This way the arrays are created, typeof Object

console.log(productColors[0]);
console.log(productColors.length) // Determine the lenght of an array through built in property
