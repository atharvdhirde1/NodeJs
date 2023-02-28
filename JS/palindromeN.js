function isPalindrome(num) {
    if (num < 0) {
      return false;
    }
    let reversed = 0;
    let original = num;
    while (original > 0) {
      const digit = original % 10;
      reversed = (reversed * 10) + digit;
      original = Math.floor(original / 10);
    }
    return num === reversed;
  }
  
  // Example usage:
  const num1 = 12321;
  const num2 = 12345;
  console.log(isPalindrome(num1)); // Output: true
  console.log(isPalindrome(num2)); // Output: false
  