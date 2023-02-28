function isPrimeNumber(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Example usage:
  const num1 = 7;
  const num2 = 10;

  console.log(isPrimeNumber(num1)); // Output: true
  console.log(isPrimeNumber(num2)); // Output: false
  