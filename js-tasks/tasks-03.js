//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
function findSmallestInt(args) {
  return Math.min(...args);
}
//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return parseFloat((2 * Math.PI * circle.radius).toFixed(6));
}
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  let result = [];

  for (var key in obj) {
    if (key.length === 5) result.push(key);

    if (obj[key].length === 5) result.push(obj[key]);
  }
  return result
}
