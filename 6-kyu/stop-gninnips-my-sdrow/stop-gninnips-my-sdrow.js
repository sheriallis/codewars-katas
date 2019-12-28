function spinWords(str) {
  //split string into arr
  let words = str.split(" ");
  //Loop over word arr and check if current word is 5 letters or more
  return words
    .map(word => {
      // If 5 letters or more reverse word
      return word.length >= 5
        ? word
            .split("")
            .reverse()
            .join("")
        : word;
    })
    .join(" "); // Join all words together as complete string
}
spinWords("Just kidding there is still one more"); // "Just gniddik ereht is llits one more"
