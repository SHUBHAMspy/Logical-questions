// for storing -ve value extra value is spent to store the -ve information.
// Can use Math.sign as well.
function checkNumberIsPositiveOrNegative(number) {
  if(number == 0) return "Number is 0";
  if (number > 0) return 1;
  else if (number < 0) return -1 ;
  else return NaN
}

console.log(checkNumberIsPositiveOrNegative(10));