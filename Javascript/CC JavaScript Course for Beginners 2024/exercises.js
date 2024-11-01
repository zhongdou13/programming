// Write a function to accept two numbers and return the maximum number

// let num1 = 5;
// let num2 = 3;

// function maxNum(num1,num2){
//     if (num1 > num2){
//         return num1;
//     } else if (num2 > num1){
//         return num2;
//     } else
//     console.log("The numbers are equal!");
// }

// console.log(maxNum(num1,num2));

// Best practice version with ternary operator

// function maxNum(num1,num2){
//     return num1 >= num2 ? num1:num2;
// }

// console.log(maxNum(3,4));

// Write a function to accept a number. Then return "FizzBuzz" if divisible by 3 and 5. Or retunr Fizz
// if only div by 3, or return Buzz if only div by 5. Or return the origin num if not div by 3 or 5.

// function fizzBuzz(number){
//     if (number % 3 === 0 && number % 5 === 0)
//         return "FizzBuzz";
//     else if (number % 3 === 0)
//         return "Fizz";
//     else if (number % 5 === 0)
//         return "Buzz"
//     else
//     return number;
// }

// console.log(fizzBuzz(7));

// Write function that takes in an array and returns only even numbers
// function displayEven (array){
//     for (const elem of array){
//         if (elem % 2 === 0)
//             console.log(elem);
//     }
// }
// console.log(displayEven([1,2,3,4,5,6,7,8,9,10]))

// Same but only odd numbers to display
function displayEven (array){
    for (const elem of array){
        if (elem % 2 != 0)
            console.log(elem);
    }
}
console.log(displayEven([1,2,3,4,5,6,7,8,9,10]))