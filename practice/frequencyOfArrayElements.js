const array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]
const frequencies = array.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});

console.log("🚀 ~ file: frequencyOfArrayElements.js ~ line 5 ~ frequencies ~ frequencies", frequencies)
