//Info: Armstrong number is a number where the addition of each digit to the power of no of digits gives the same number.

function checkArmstrong(number) {
  let armstrongSum = 0;
  let temp = number

  // Check the no of digits
  const calculateDigits = (num) => {
    // Iterative Approach
    // let count = 0;
    // while (num > 0) {
    //   num = Math.floor(num/10);
    //   console.log(num);
    //   count++;
    // }
    // return count;
    return num.toString().length
  }

  let numberOfDigits = calculateDigits(temp)
  while (temp > 0) {
    let lastDigit = temp % 10;
    armstrongSum += Math.pow(lastDigit,numberOfDigits);
    temp= Math.floor(temp/10);
  }
  
  if(armstrongSum == number) return true
  else return false

}

console.log(checkArmstrong(153));