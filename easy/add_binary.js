/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
  let res = "";   // result
  let carry = 0;  // carry after the last of each string
  
  while (a || b || carry){  // while none of these are undefined
      let sum = +a.slice(-1) + +b.slice(-1) + carry;  // we just simply add them

      if (sum > 1){ // if it's greater than on it means there's a carry
          carry = 1;
          res = sum % 2 + res; // after that we just modulo to check what to put. if it's 2 -> 0 if 3 -> 1
      } else {
          carry = 0;
          res  = sum + res; // no carry so we just put either 1 or 0
      }
      a = a.slice(0, -1);   // remove the last element for a & b
      b = b.slice(0, -1);
  }
  return res; // return result
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