function arrayCount(arr) {
    let count = 0;
    for(let element of arr) 
    if(element===true) 
    count++;
    return count;
}

console.log(arrayCount([false,false,true,false,true]))