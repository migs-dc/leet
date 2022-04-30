/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
  let res = "";
  let carry = 0;
  
  while (a || b || carry){
      let sum = +a.slice(-1) + +b.slice(-1) + carry;
      if (sum > 1){
          res = sum % 2 + res;
          carry = 1;
      } else {
          res  = sum + res;
          carry = 0;
      }
      a = a.slice(0, -1);
      b = b.slice(0, -1);
  }
  return res; 
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