function squareDigits(num) {
  const numArr = [];

  // get individual numbers and push to numArr
  num
    .toString()
    .split("")
    .map(value => {
      numArr.push(parseInt(value));
    });

  const squaredDigitsString = numArr.map(num => num * num).join("");

  return parseInt(squaredDigitsString);
}