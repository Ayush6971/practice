const array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]
const frequencies = array.reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});

const frequenciesObj = {}
for (let i = 0; i < array.length; i++) {
  frequenciesObj[array[i]] ? ++frequenciesObj[array[i]] : frequenciesObj[array[i]] = 1;
  // if (frequenciesObj[array[i]]) frequenciesObj[array[i]] += 1;
  // else frequenciesObj[array[i]] = 1;
}
console.log("🚀 ~ file: frequencyOfArrayElements.js ~ line 7 ~ frequenciesObj", frequenciesObj)

console.log("🚀 ~ file: frequencyOfArrayElements.js ~ line 5 ~ frequencies ~ frequencies", frequencies)
