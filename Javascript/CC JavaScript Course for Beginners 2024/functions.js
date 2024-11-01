// function sayHi(){
//     console.log("Hello!");
// }

// // sayHi();

// let myName = "Max";

// function sayHi(name){
//     console.log("Hello! " + name);
// }

// sayHi(myName);

// function multiply(num1, num2){
//     return num1*num2;
// }

// console.log(multiply(2,2));

// let course = {
//     name: 'JavaScript for Beginners',
//     duration: '3 hours'
// };

// let newCourse = { 
//     ...course, // Refer to this as a rest operator
//     name: 'JavaScript Pro'
// }; // Lets us copy properties from one object to another
// console.log(newCourse);


// Rest operator allows to represent an indefinite number of arguments for function as an array
// function multiply(...args){
//     return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// }
// console.log(multiply(2,3,4,5));

// function multiplyArray(multiplier, ...numbers){ // Example if we want a function with a multiplier for an array
//     return numbers.map(number => number * multiplier);
// }

// console.log(multiplyArray(2, 1,2,3,4));

// function writeCode(language = 'JavaScript'){ //Here we assign a default value to avoid situations when we call a function without argument
//     console.log (`Write code in ${language}!`);
// }
// writeCode();