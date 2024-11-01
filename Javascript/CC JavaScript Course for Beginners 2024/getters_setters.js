// const course = {
//     name: 'JavaScript for Beginners',
//     duration: '3 hours',
//     details(){
//         return `${this.name} is ${this.duration}`; // More sophisticated way by working with methods, it is read only
//     }
// };

// // console.log(`${course.name} is ${course.duration}`);
// console.log(course.details()); // Will hide properties from us, we know and use only method

// With getters and setters we can get custom logic for our method as if it was a regular propery

// const course = {
//     name: 'JavaScript for Beginners',
//     duration: '3 hours',
//     get details(){
//         return `${this.name} is ${this.duration}`; // More sophisticated way by working with methods, it is read only
//     },
//     set details(value){
//         let parts = value.split(' is ');
//         this.name = parts[0];
//         this.duration = parts[1];
//     }
// };

// course.details = 'JavaScript Pro is 10 hours';
// console.log(course.details);

// Throw, Try and Catch

const course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get details(){
        return `${this.name} is ${this.duration}`; // More sophisticated way by working with methods, it is read only
    },
    set details(value){ // We have no guarantee someone won't use a string here
        if (typeof value !== 'string'){
            throw new Error (`Value, ${value} is not a string!`);
        }
        
        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

// course.details = 43; // We will get a halt of program and our Error message.
console.log(course.details);

// Try and Catch on the otherhand will not halt our program execution

try {
    course.details = 42;
} catch (e) {
    console.log(`Caught an error: ${e.message}`); // Program will ony present us with an Error, but won't halt
}