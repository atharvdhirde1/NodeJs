function getMaxNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Example usage:
  const numbers = [5, 10, 2, 8, 3];
  const maxNumber = getMaxNumber(numbers);
  console.log(maxNumber); // Output: 10