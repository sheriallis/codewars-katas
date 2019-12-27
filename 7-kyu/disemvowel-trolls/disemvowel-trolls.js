// Solution 1

function disemvowel(str) {
  const vowels = ["a", "i", "u", "e", "o"];

  return str
    .split("")
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join("");
}

// Solution 2

function disemvowel(str) {
  return str.replace(/[aiueo]/gi, "");
}

disemvowel("This website is for losers LOL!"); // "Ths wbst s fr lsrs LL!"
