// 1. Hello World

// Method 1
console.log("Hello World")

// Method2
alert("Hello World");

// Method 3
document.write("<h1>Hello World</h1>")

// 2. Add two numbers
// a.
  function addTwoNumbers(a,b){
    return a + b;
  }
  console.log(addTwoNumbers(2,5));

// b.)Adding two numbers by taking values from user
  let a = parseInt(prompt("Enter the First Number"))  // it takes values as a string so the result will be concatenation not addition
  let b = parseInt(prompt("Enter the second number"))
  console.log(addTwoNumbers(a,b));




