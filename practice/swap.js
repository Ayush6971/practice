const obj = { x: "a", y: "b" };

function swapKeyValue(object) {
  const newObj = {};
  for (let key in object) {
    newObj[object[key]] = key;
  }
  return newObj;
}
const result = swapKeyValue(obj);
console.log("🚀 ~ file: index.js ~ line 11 ~ result", result);
