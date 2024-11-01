// let priceChoco = 1.99;
// let hasCash = 1;

// const canBuyChoco = hasCash >= priceChoco;

// if (canBuyChoco){
//     console.log("Enjoy your choco!");
// } else {
//     console.log ("Sorry you do not have enough cash!")
// }

// let hour = 14.5; // Two examples, where one code block can be used without {} parenthesis

// if (hour > 6 && hour <= 12){
//     console.log("Serving breakfast!")
// } else if (hour > 12 && hour <= 14){
//     console.log("Serving lunch!");
// } else { 
//     console.log("Serving dinner!");
// }
// // if (hour > 6 && hour <= 12)
// //     console.log("Serving breakfast!")
// // else if (hour > 12 && hour <= 14)
// //     console.log("Serving lunch!");
// // else 
// //     console.log("Serving dinner!");

let job = "Designer";

switch (job){
    case "Software Engineer":
        console.log("Writes code");
        break;
    case "Designer":
        console.log("Makes user interface documents");
        break;
    case "Cloud Engineer":
        console.log("Manages and deploys cloud resources");
        break;
    default:
        console.log("Works with customers");
}