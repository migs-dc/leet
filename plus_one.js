var plusOne = function(digits){
    let last = digits.length - 1; // just declaring last to refer the the last elem in digits

    if (digits[last] < 9) digits[last]++;   // simple check if the last digit isn't a 9 we'll just go straight to return digits
    else {
        for (let i = last; i >= 0; i--){    // if it's a 9 we start to look through each elem from the back
            if (digits[i] === 9){           // if we find a 9 we'll just make that elem a 0
                digits[i] = 0;
            } else {
                digits[i]++;                // until we find a elem that isn't 9. we then just increment that and break
                break;
            }
        }
        if (digits[0] === 0) digits.unshift(1);     // we add another elem in the front (1) of the array if for example all the elements are 9s
    }
    return digits;                          // just return digits after

};