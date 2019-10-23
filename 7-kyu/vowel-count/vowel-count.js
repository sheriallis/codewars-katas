// Solution #1

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  var vowelsCount = 0;

  str.split("").map(letter => {
    if (vowels.includes(letter)) {
      console.log(vowelsCount, letter);
      vowelsCount++;
    }
  });

  return vowelsCount;
}

// Solution #2

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str.split("").reduce((vowelsCount, current) => {
    if (vowels.includes(current)) {
      vowelsCount++;
      return vowelsCount;
    }

    return vowelsCount;
  }, 0);
}
