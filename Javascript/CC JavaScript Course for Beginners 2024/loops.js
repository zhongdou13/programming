// let numbers = [1,2,3,4,5,6,7];

// let idx = 0;
// let lenghtOfArray = numbers.length;

// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);
// console.log(numbers[idx++]);


// For is used when the end number of iterations is known eg. array, while when unknown
// for (let idx = 0; idx < numbers.length; idx++){
//     console.log(numbers[idx]);
// }

// let sum = 0;

// while (true){
//     console.log("Loop");
//     sum++;
//     if (sum === 10)
//     break;
// }

// Do-While is not widely used, guarantess our loop will be executed at least one time

// let i = 0;
// do {
//     console.log(i);
//     i++
// } while (i <10);

// For-In loops iterates over each enumerable property of an object. Const key is a common practice
// const course = {
//     name: "JavaScript for Beginners",
//     duration: 3,
//     sections: 7
// }

// for (const key in course) {
//     console.log(course[key]);
// }

// For-Of is designed to work with iterable objects like arrays, strings, Maps, and Sets. 
// let numbers = [1,2,3,4,5];

// for (const element of numbers){
//     console.log(element);
// }

// const obj = {a: 1, b: 2, c: 3};

// for (const key in obj){
//     if (key === "b"){
//         break;
//     }
//     console.log(obj[key]);
// }

// const arr = [1,2,3,4,5];

// for (const element of arr){
//     if (element === 3){
//         break;
//     }
//     console.log(element);
// }

// for (let i =0; i < 10; i++){
//     if (i%2 === 0){ // checks if a value is even
//         continue; // skips the current iteration and moves to next one
//     }
//     console.log(i);
// }

// let i = 0;
// while (i<10){
//     i++;
//     if (i%2 === 0){
//         continue;
//     }
//     console.log(i);
// }

// const obj = {a:1, b:2, c:3, d:4};
// for (const key in obj){
//     if (obj[key] % 2 === 0){
//         continue;
//     }
//     console.log(obj[key]);
// }

const arr = [1,2,3,4,5];
for (let elem of arr){
    if (elem % 2 === 0){
        continue;
    }
    console.log(elem);
}