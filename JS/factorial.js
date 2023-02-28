function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  // Example usage:
  const num1 = 5;
  const num2 = 3;
  console.log(factorial(num1)); // Output: 120
  console.log(factorial(num2)); // Output: 3628800
  