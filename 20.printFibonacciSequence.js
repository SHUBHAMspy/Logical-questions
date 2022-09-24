// Info: Fibonacci sequence starts with 0 and 1 i.e the first two numbers are 0 & 1
// In fibonacci sequence any third number is the sum of previous two numbers in the sequence
function fibonacciSequence(number) {
  // So inorder to get the third no in the sequence we have to keep count of the previous two numbers 
  let previous1 = 0;
  let previous2 = 1;
  
  console.log(previous1);
  console.log(previous2);
  
  while(number > 0){
    let third = 0;

    // Calculation of 1st third
    third = previous1 + previous2;
    console.log(third);
    
    // Now we need to calculate the next third for the we need to calculate the next previous to give us next third
    previous1 = previous2;
    previous2 = third

    number--;
  }
}
fibonacciSequence(10);
