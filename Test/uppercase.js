// Write a function that takes an array of strings and returns a new array with
// all the strings converted to uppercase.


function convertToUppercase(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].toUpperCase());
    }
    return result;
  }
  const myArray = ["copy", "Happy", "test", "banana", "apple"];
console.log(convertToUppercase(myArray));