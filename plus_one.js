var plusOne = function(digits){
    last = digits.length - 1;
    if (digits[last] < 9) digits[last]++;
    else {
        for (let i = last; i >= 0; i--){
            if (digits[i] === 9){
                digits[i] = 0;
            } else {
                digits[i]++;
                break;
            }
        }
        if (digits[0] === 0) digits.unshift(1);
    }
    return digits;
};