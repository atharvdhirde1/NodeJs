// LECTURE: Values and Variables

// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country.
// 2. Log their values to the console

let country ='India'
let continent = 'Asia'
let population= 20000

console.log(country)
console.log(continent)
console.log(population)


// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let isIsland = true;
let language; 
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


//  LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)

language = 'English';

// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.

// const country ='India'
// const continent = 'Asia'
// const isIsland = true

// 3. Try to change one of the changed variables now, and observe what happens

// isIsland=false