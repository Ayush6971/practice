const obj = { x: "a", y: "b" };

function swap(object) {
  const newObj = {};
  for (let key in object) {
    newObj[object[key]] = key;
  }
  return newObj;
}
const result = swap(obj);
console.log("🚀 ~ file: index.js ~ line 11 ~ result", result);
