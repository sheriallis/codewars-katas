// Solution 1

function solution(number) {
  let multiplesOfThreeAndFive = [];

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesOfThreeAndFive.push(i);
    }
  }

  return multiplesOfThreeAndFive.reduce((sum, currentNum) => {
    return sum + currentNum;
  }, 0);
}

// Solution 2

function solution(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
const test = solution(10); // Should return 23
console.log(test);
