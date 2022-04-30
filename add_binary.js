/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

 var addBinary = function(a, b) {
  let ans="";
  let carry=0;
  
  while(a || b || carry){
    let sum = +a.slice(-1) + +b.slice(-1)+carry;

    if(sum>1){
      ans=sum%2+ans;
      carry=1;
    }else{
      ans=sum+ans;
      carry=0;
    }
    // remove the last index
    a=a.slice(0,-1);
    b=b.slice(0,-1);
  }

 return ans;
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