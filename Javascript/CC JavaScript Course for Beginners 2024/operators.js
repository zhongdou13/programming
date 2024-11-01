// let num1 = 14;
// let num2 = 10;

// let isNum1Greater = num1 > num2;
// console.log(isNum1Greater)
// isNum1Greater = num1 < num2;
// console.log(isNum1Greater)
// isNum1Greater = num1 >= num2;
// console.log(isNum1Greater)

// let a = 2;
// let b = "2";

// console.log(a == b) // Not strict truthy, will convert

// console.log(a === b) // Strict, will return false due to diff data types

// let age = 16;

// const canDrive = age >= 16 ? true:false; // Example of ternary operator
// console.log(canDrive);

// console.log(true || true);
// console.log (false || true); // As long as one operand is true result is going to be true
// let hasReserv = true;
// let acceptingWalkIns = false;

// const hasAccessToTable = hasReserv || acceptingWalkIns;
// console.log(hasAccessToTable);

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// let age = 16;
// let hasCar = false;

// const canDrive = age >= 16 && hasCar;
// console.log(canDrive);

// console.log(!true); // Reverses

// let a = null;
// const result = a ?? false;

// console.log(result);

// let userPref = null;
// const defSettings = "light mode";
// // If the user has no preference (it is null), use the default setting.

// const currentSetting = userPref ?? defSettings; // he nullish coalescing operator ?? checks if userPreference is null
// // or undefined. Since userPreference is null, currentSetting will be set to "light mode".
// console.log(currentSetting);

let usersChosenColor = "blue";
let defColor = "greent";

const currentWebsiteColor = usersChosenColor || defColor; // First one will be chosen, however if the first one is
// empty, the second one will be chosen. Null, undefined, NaN, empty string, 0 and false are falsy 

console.log(currentWebsiteColor);
