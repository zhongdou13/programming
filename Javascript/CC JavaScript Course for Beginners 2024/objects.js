// const dog = {
//     name: 'Max',
//     breed: 'Dachshund',
//     age: 5,
//     weightPounds: 12,
//     eat: function(){
//         console.log("Chomp!");
//     },
//     bark(){
//         console.log("Woof!")
//     }
// }

// const dog = {
//     name: 'Marley',
//     breed: 'Chocolate Lab',
//     age: 3,
//     weightPounds: 60,
//     eat: function(){
//         console.log("Chomp!");
//     },
//     bark(){
//         console.log("Woof!")
//     }
// }

// Factory function with CamelCase notation
// function getDog(name, breed, age, weightPounds){
//     return{
//         name: name,
//         breed: breed,
//         age: age,
//         weightPounds, //When the property key and variable name are the same, you can use shorthand property names. 
//         eat(){
//             console.log("Chomp!")
//         },
//         bark(){
//             console.log("Bark!")
//         }
//     }
// }

// const anotherDog = getDog('Marley','Chocolate Lab', 3, 60) // This way we reuse code and no need for duplications
// console.log(anotherDog);

// Constructor function with Pascal Notation, though looks more cumbersome, When creating many instances,
// the constructor function combined with prototypes is more memory efficient. In the constructor function example,
// each Dog instance would inherit methods (eat, bark) through the prototype chain, reducing memory usage by not
// duplicating functions for each instance.

// function Dog(name, breed, age, weightPounds){
//     // this = {};
//     // Add properties to this
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//     this.weightPounds = weightPounds;

//     this.eat = function(){
//         console.log(this.name + ': Chomp!');
//     }
//     this.bark = function(){
//         console.log(this.name + ': Woof!');
//     }

//     // return this;
// };

// const anotherDog = new Dog('Marley', 'Lab', 3, 60);
// console.log(anotherDog);

// const person = {
//     name: 'Steven'
// };

// person.favFood = 'tacos';
// person['favIceCream'] = 'chocolate'; // different way to add property
// console.log(person);

// delete person.favIceCream;
// console.log(person);

// person.eat = function(){
//     console.log("Start eating!")
// }

// person.eat();

const dog = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};

// for (const key in dog){
//     console.log(dog[key]);
// }

// const keys = Object.keys(dog); 
// console.log(keys); // Will return an array of properties

// const values = Object.values(dog); // Will return an array of values
// console.log(values);

// const entries = Object.entries(dog); // Will return key-value pairs of an object or nested array
// console.log(entries);

// // Cloning of an object, when we do not want when one changes after another

// let a = { value: 10};
// let b = {};
// Object.assign(b, a);

// b.value = 20;

// console.log(a);
// console.log(b);

// Math and a case to generate a random number between 1 and 100
const randomNum = Math.round(Math.random()*(100-1)+1);
console.log(randomNum);