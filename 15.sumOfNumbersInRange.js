function sumOfRangeOfRange(l,h) {
  let sum = 0; // represents that we have nothing in the start.

  for (let i = l; i <= h; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfRangeOfRange(2,10));