//Factorial of a number is a continuous multiplication from that number to 1
function factorial(number) {
  // 5*4*3*2*1
  // Edge case: fact(0) = 1
  let fact = 1;
  if(number == 0) return fact
  while(number >= 1){
    fact = fact * number;
    number -= 1;
  }
  
  return fact;
}

console.log(factorial(5));