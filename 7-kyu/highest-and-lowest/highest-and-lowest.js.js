// Solution 1

function highAndLow(numbers) {
  const sortedNumbers = numbers.split(" ").sort((a, b) => b - a);

  return `${sortedNumbers[0]} ${sortedNumbers[sortedNumbers.length - 1]}`;
}

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
