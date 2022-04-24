/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = 0; i < digits.length; i++) {
        let num = BigInt(digits.join('')) + 1n;
        return Array.from(num.toString()).join().split(',');
    }
};

var plusOne = function(digits) {
    if(digits[digits.length - 1]<9){
        digits[digits.length - 1] += 1;
    } else {
        for(let i=digits.length-1; i>=0; i--){
            if(digits[i] === 9){
                digits[i] = 0;
            } else {
                digits[i] = digits[i] + 1;
                break;
            }
        }
        if(digits[0] === 0){
            digits.unshift(1);
        }
    }
    
    return digits;
};