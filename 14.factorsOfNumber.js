// Info: A factor is a number that divides the given number exactly without leaving any remainder
// Multiple: A multiple of a number is a number that is the product of a given number and some other natural number
// To factor a number is to express it as a product of (other) whole numbers, called its factors
// i.e the given number is a multiple.

function factorsOfANumber(number) {
  let factors = []; // Space: O(k)
  // we know that every number is divisible by 1 and itself so 1 and number are default factors
  factors.push(1);
  factors.push(number);
  
  // Then we have to check whether that number is prime or not 
  for (let i = 2; i < number; i++) {
    if(number % i == 0) factors.push(i)
  }
  return factors;
}

console.log(JSON.stringify(factorsOfANumber(24)));