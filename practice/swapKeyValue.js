const obj = { x: "a", y: "b" };

function swapKeyValue(object) {
  const newObj = {};
  for (let key in object) {
    newObj[object[key]] = key;
  }
  return newObj;
}

console.log(swapKeyValue(obj));
