// Info:
// In JavaScript, the Math.random function will generate a random floating point number between 0 and 1(0 is included 1 is excluded)
// If the MIN value is always 0, then we can multiply the random number with the MAX value, but if the MIN value is other than 0, we need to find the difference between MAX and MIN. Then we will multiply the random number with that difference and add the MIN value.

function generateRandomNumbers(min,max) {
 let difference = max - min;
 let randomNumber = Math.floor(Math.random() * difference);
 return randomNumber = randomNumber + min; 
}

console.log(generateRandomNumbers(5,10));