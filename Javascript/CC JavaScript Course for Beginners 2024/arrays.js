// Commonly used datastructure in JS that stores a list of data

// const numbers = [5,4,3,2,3,1];

// // numbers.push(7); // Will put new number into the end of our array
// // console.log(numbers);

// // numbers.unshift(24); // Will put new number into the beginning of our array
// // console.log(numbers);

// numbers.splice(1,0,25,24); // Will put new numbers into the middle
// console.log(numbers);

// const indexOfThree = numbers.indexOf(3); // Searches the index of first value in array
// console.log(indexOfThree);

// const lindexOfThree = numbers.lastIndexOf(3); // Searches the index of last value in array
// console.log(lindexOfThree);

// const indexOfTen = numbers.lastIndexOf(10);
// console.log(indexOfTen); // Will give us -1 which is basically undefined

// if (indexOfTen === -1){
//     console.log('Ten is not found in the array');
// }

// if (!numbers.includes(10)){
//     console.log('10 is not found in the arrays');
// }

// Array method to fin/locate an object
// const employees = [
//     {
//         id: 1,
//         name: 'Jim'
//     },
//     {
//         id: 2,
//         name: 'Mike'
//     },
//     {
//         id: 1,
//         name: 'Pam'
//     },
// ];

// const employee = employees.find(function(e) => e.name === 'Jim';
// console.log(employee);

// Arrow functions (lambda in python?)

// const add = (num1,num2) => num1 + num2;
// console.log(add(2,3));

// Removing elements with pop (from end), splice (from middle) and shift (from beginning);

// const numbers = [1,2,3,4,5];

// const lastElem = numbers.pop();
// console.log(`last elem: ${lastElem}`);

// const firstElem = numbers.shift();
// console.log(`first elem: ${firstElem}`);

// const midElem = numbers.splice(1,1);
// console.log(`middle elem: ${midElem}`);

// If we want to empty an array
// const delNumbers = numbers.splice(0, numbers.length);
// console.log (`deleted numbers: ${delNumbers}`);

// const exNumbersA = [1,2,3];
// const exNumbersB = [4,5,6];

// // const combArr = exNumbersA.concat(exNumbersB); // Will for a new combined array
// // console.log(combArr);

// // // We can then slice the new array
// // const slicedArr = combArr.slice(0,4);
// // console.log(slicedArr);

// // More commonly used method to combine two arrays

// let combined = [...exNumbersA, ...exNumbersB, 10]; // More flexibility than concat
// console.log(combined);

// // Two ways to iterate within an array
// // for (const number of combined)
// //     console.log(number); // Traditional for-of
// combined.forEach(number => console.log(number));

// const numbers = [1,2,3,4,5];
// const joinedNumbers = numbers.join(', '); // Will form a string out of an array
// console.log(joinedNumbers);

// const courseName = 'JavaScript for beginners';
// const parts = courseName.split(' '); // This will for a new array
// const urlSlug = parts.join('-');
// console.log(urlSlug);

// let characters = ['c','d','b','a'];
// // characters.sort();
// console.log(characters.sort());

// let employees = [
//     { id: 1, name: 'Jen'},
//     { id: 2, name: 'Steve'},
//     { id: 3, name: 'Andrew'},
//     { id: 4, name: 'Terry'},
// ];

// // If we want to sort (objects) by names we need to utilize a callback function
// employees.sort((a,b) => {
//     const lowerCaseA = a.name.toLowerCase();
//     const lowerCaseB = b.name.toLowerCase();

//     if (lowerCaseA < lowerCaseB) return -1;
//     if (lowerCaseA > lowerCaseB) return 1;
//     return 0;
// });

// console.log(employees);

// const numbers = [2,4,6,8,10,7];

// const areAllEven = numbers.every(number => number % 2 === 0); // Every checks all elements
// console.log(`areAllEven: ${areAllEven}`);

// const hasOneEvenNumber = numbers.some(number => number % 2 ===0); //At least one element has to be even to get true
// console.log(hasOneEvenNumber);

// const nums = [1,2,3,4,5,6];
// const evenNums = nums.filter(nums => nums % 2 === 0);
// const oddNums = nums.filter(nums => nums % 2 != 0);
// console.log(evenNums);
// console.log(oddNums);

// let employees = [
//     { id: 1, name: 'Jen', role: 'Developer'},
//     { id: 2, name: 'Steve', role: 'Designer'},
//     { id: 3, name: 'Andrew', role: 'Producer'},
//     { id: 4, name: 'Terry', role: 'Manager'},
//     { id: 4, name: 'Rody', role: 'Developer'},
// ];

// // For example we want to filter and get only Developers

// const developers = employees.filter(employees => employees.role == 'Developer');
// console.log(developers);

// Mapping ideal tool for transforming the data withing an array without altering the original array
// const numbers = [2,4,6,10];
// const sqNumbers = numbers.map(num => num * num);
// console.log(sqNumbers);

// const characters = ['a', 'b', 'c', 'd'];
// const upperCaseChar = characters.map(char => char.toLocaleUpperCase());
// console.log(upperCaseChar);

// const employees = [
//     {id:1, name: 'Alice', email: 'AliCE@gmail.com'},
//     {id:2, name: 'Bob', email: 'BOBBYTE@gmail.com'},
//     {id:3, name: 'Marley', email: 'MarLONE@gmail.com'},
// ];

// const updEmployees = employees.map(employee => ({
//     ...employee,
//     email: employee.email.toLowerCase()
// }));
// console.log(updEmployees);

// If we want to sum all of the numbers in array
// const numbers = [1,10,5,14];
// // let sum = 0;

// // for (const num of numbers)
// //     sum += num;
// // console.log(sum);

// // The clearner way to do it by using reduce method, reduces all of the elements of an array into a single value
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum);