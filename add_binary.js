/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 function(a, b) {
    let refStr = a.length >= b.length ? a : b;
    let otherStr = (refStr === a ? b : a);
  
    let i = refStr.length - 1;
    let j = otherStr.length - 1;
      
    let carry = "";
    let output = "";
      
    while (i >= 0) {     // to loop with largest string in picture.
      const fn = Number(refStr[i]);
      const ln = j < 0 ? 0 : Number(otherStr[j]);        // in case, the other string looping gets done, and no indexes present.
        
      let str = "";
      if (fn + ln + Number(carry) == 2) {
        str = "0";
        carry = "1";
      } else if (fn + ln + Number(carry) == 3) {
        str = "1";
        carry = "1";
      } else {
        str = String(fn + ln + Number(carry));
        carry = "";
      }
      i--;
      j--;
      output = str + output;
    }
      return (carry + output);
  };