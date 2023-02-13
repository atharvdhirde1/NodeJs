// const book={
//     title:'AD',
//     author:'Atharv'
// }

// //take the object and print
// // op:- {"title":"AD","author":"Atharv"}
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// // take the particular author and only print th data of it
// // op:- Atharv
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// -----------------------------------------------------------------------------------

const fs = require('fs')
const book={
    title:'AD',
    author:'Atharv Dhirde'
}

//take the object and print
// op:- {"title":"AD","author":"Atharv"}
const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJSON)