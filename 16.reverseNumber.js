//Info:
// A number is constituted by digits(ones, tens , thousands).So inorder to reverse it we have to break it from the last digit(i.e from ones place) digit by digit
// And make it a new number starting from the first digit. 
//So inorder to make it into a new no we have to store the digit we have broken it into a place to keep count which digit was broken
// Also we have to store the reversed number to later compare with the original number
// Inorder to extract any units digit we have to divide by 10 beacuse units are not divisible by 10 lesser number is not divided by bigger number in units.
// Division by 10 is reducing 10s from a number whereas multiplication by 10 is adding tens into a number

// Edge case: Reverse of 0 is 0
// Edge case : Reverse of 10 is 1 not 01 i.e numerically 01 is nothing but still 1 because value 0 is after a number not before it.
function reverseNumber(number) {
  let reversed = 0;
  let lastDigit;
  while (number > 0) {
    
    lastDigit = number % 10;
    reversed = reversed * 10 + lastDigit ;
    // when you reduce the digit or other words when you remove the  10s by dividing you are changing the number so inorder to keep account of that no 
    // you have to store it somewhere.But doing modulus doesnt makes your no smaller it just calculates the remainder
    // inorder to gets thr reduced or new number we nedd to calculate quotient.
    
    number = Math.floor(number / 10) ;
  }
  return reversed;
}
console.log(reverseNumber(10));