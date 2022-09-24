function multiplicationTableOfNumber(number) {
  for (let i = 1; i < 10; i++) {
    let multiplication = number * i
    console.log(`${number} * ${i} = ${multiplication}`);
  }
}
multiplicationTableOfNumber(10);