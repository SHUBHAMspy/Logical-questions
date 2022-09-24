// Info: a number is said to be palindrome if it is equal from both start and end 
// i.e traversing it from start or end gives the same no.

// Now how to traverse a number from end if it is not a string? or we can say how to reverse a number
function reverseNumber(number) {
  let reversed = 0;
  let lastDigit;
  
  while (number > 0) {
    
    lastDigit = number % 10;
    reversed = reversed * 10 + lastDigit ;

    number = Math.floor(number / 10) ;
  }
  return reversed;
}

function checkPalindrome(number) {
  if(number == 0) return true

  let lastDigit = number % 10;
  if(lastDigit == 0) return false

  const reverse= reverseNumber(number)
  if(reverse == number) return true
  else false
}

console.log(checkPalindrome(210));