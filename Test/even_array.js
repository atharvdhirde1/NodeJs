// Write a function that takes an array of numbers and returns a new array with only 
//the even numbers from the original array.


function evenArray(array1){
    let result=[];
    for(let i=0 ; i<array1.length ; i++){
        if(array1[i]%2==0){
            result.push(array1[i])
        }
        
    }
    return result;
}

const even = [1,2,3,4,5,6,7,8,9,45,46,34]
console.log(evenArray(even))