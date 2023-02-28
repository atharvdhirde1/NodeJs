function reverseNumber(num) {
    let reversed = 0;
    
    while (num > 0) {
      reversed = (reversed * 10) + (num % 10);
      num = Math.floor(num / 10);
    }
    return reversed;
  }
  
  // Example usage:
  const num = 98912
  const reversedNum = reverseNumber(num);
  console.log(reversedNum); // Output: -321