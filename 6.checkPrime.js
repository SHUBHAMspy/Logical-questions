// Info: A number is prime which is divisible by 1 and itself

// Edge Case: 1 is neither prime nor composite
// Edge Cases: A prime no is a positive number
// Edge Case: But every number is divisible by 1 and itself

// A number is divisible by 1 & itself and not divisible by other prime numbers like 2,3,5,7,11etc
// i.e inorder to be prime it should not be composite that means to prove something right we need to prove that its is not wrong that is the negation 
// We have to check for composite that the number is composite or not.

function checkIsPrime(number) {
  if (number < 1 || number === 1) return false;
  
  for (let n = 2; n < number; n++) {
    if (number % n === 0) {
      return false
    }
  }
  // if (number % number === 0 && number % 1 === 0) {
  //   return true;
  // }
  return true;
}

console.log(checkIsPrime(225));