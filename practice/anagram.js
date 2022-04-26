const checkAnagram = (string1, string2) => {
  if (!string1 || !string2 || string1.length !== string2.length) {
    return "It is Not Anagram!";
  }

  string1 = string1.split("").sort().join("");
  string2 = string2.split("").sort().join("");

  if (string1 === string2) return "It is Anagram!";
};

console.log(checkAnagram('test','tset'));