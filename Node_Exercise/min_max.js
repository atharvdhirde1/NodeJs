// // minMax([1, 2, 3, 4, 5]) 
// let array = [1,2,3,4,5,3,1]

// console.log(Math.max.apply(Math, array));
// console.log(Math.min.apply(Math, array));

// const greet = name => {
//       return `Hello, ${name} how are you doing today?`;
//     };
//     console.log(greet('Ryan')); 

const getCount = str => {
    let count=0;
    for(let char of str){
    if('aeiou'.includes(char))
    count++;

    }
    return count;
    };
    console.log(getCount('my pyx')); // 0
    console.log(getCount('pear tree')); // 4
    console.log(getCount('abracadabra')); // 5
    console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13