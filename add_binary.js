/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
  let carry = 0;
  let res = "";
  
  let ap = a.length-1;
  let bp = b.length-1;
  
  while
};

/* pseudo code:

  iterate through both strings at the same time

  have a carry variable

  if a[i] and b[i] are both 1
    carry = 1
  else 
    carry = 0

  res += carry

*/