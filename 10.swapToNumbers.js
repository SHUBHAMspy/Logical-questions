//swap two numbers
// a  , b   =>  b, a
// if just directly put b in place of a it will override it and we will lose a's value
// likely if we put a in place of b, b's value will be overriden we will lose b.
// So inorder to tell computer to place any number we need to keep record of that particular place in memory where we want to put it.
// Now in order to put a number at a particulr place that place needs to be empty i.e the value should be taken out and stored somewhere else
function swapTwoNumbers(num1,num2) {
  // Record the places to be put at.
  let place1 = num1;
  let place2 = num2;
   console.log("Initial Places:", place1,place2 );

  // storing a value at a particular place to empty that particular place.
  let place3 = place2;
  
  // Now stort swapping
  place2 = place1;
  place1 = place3;

  //After swapping
  console.log("After Swapping:",place1,place2);
  
}

swapTwoNumbers("Apple","Orange");