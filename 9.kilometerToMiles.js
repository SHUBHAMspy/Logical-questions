function convertKilometerToMiles(kilometers) {
  // 1km = 0.621371miles
  const miles = kilometers * 0.621371
  return miles;
}

console.log(convertKilometerToMiles(7));