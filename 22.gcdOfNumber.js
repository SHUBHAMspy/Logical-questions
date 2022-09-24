// Info: 
// For a set of positive integers (a, b), the greatest common divisor is defined as the greatest positive number which is a common factor of both the positive integers (a, b).
// GCD of any two numbers is never negative or 0.
// 1 is the common divisor of every number.
function gcdOfANumber(num1,num2) {
  // we can first find the divisors/factors of both the numbers
  // and then store those factors in memory to keep count of them 
  // and then compare and find the common divisors/factors
 
  let gcd = 0;
  for (let i = 2; i < Math.max(num1,num2) ; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = Math.max(i,gcd)
    }
  }
  return gcd;
}

console.log(gcdOfANumber(2,18));