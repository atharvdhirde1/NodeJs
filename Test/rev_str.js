// Write a function that takes a string as input and returns the reverse of the string.
function reverse(string1){
    let rev="";
    for(let i=string1.length-1 ; i>=0 ; i--){
        rev=rev+string1[i];
    }
    return rev;
}
const mystring="task";
console.log(reverse(mystring));