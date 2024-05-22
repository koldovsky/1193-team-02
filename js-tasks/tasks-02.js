//https://www.codewars.com/kata/reviews/57e7742fe9068ed9f4000017/groups/57e82ddbf11c64130c000236
function stringToArray(string) {
  return string.split(' ');
}
//https://www.codewars.com/kata/reviews/55563a4e01231d19e00001e6/groups/639d7f42d379e90001a85e04
function DNAtoRNA(dna) {
  return dna.replaceAll('T', 'U');
}
//https://www.codewars.com/kata/reviews/577aec3cb9498e1aed00009a/groups/57871af6ba5c4b13eb00036a
var min = function(list) {
  list.sort((a, b) => (a - b));
  return list[0];
}
//https://www.codewars.com/kata/reviews/544a5616dd73509376000092/groups/636c4db9bd0f3e00017903f5
function min(arr, toReturn) {
  if (toReturn == 'value') {
    return Math.min(...arr);
  } else {
    return arr.indexOf(Math.min(...arr));
  }
}
