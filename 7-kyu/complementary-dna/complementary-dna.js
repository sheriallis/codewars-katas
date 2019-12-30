// Solution 1

function DNAStrand(dna) {
  return dna
    .split("")
    .map(x => {
      switch (x) {
        case "A":
          return "T";
          break;
        case "T":
          return "A";
          break;
        case "C":
          return "G";
          break;
        case "G":
          return "C";
          break;
        default:
          break;
      }
    })
    .join("");
}

// Solution 2

function DNAStrand(dna) {
  return dna
    .replace(/T/g, "a")
    .replace(/A/g, "t")
    .replace(/C/g, "g")
    .replace(/G/g, "c")
    .toUpperCase();
}

// Solution 3

const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

function DNAStrand(dna) {
  return dna
    .split("")
    .map(x => {
      return pairs[x];
    })
    .join("");
}

DNAStrand("ATTGC"); // return "TAACG"
DNAStrand("GTAT"); // return "CATA"
