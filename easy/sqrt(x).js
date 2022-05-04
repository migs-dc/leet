/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {        // binary search
    let left = 1;       
    let right = x;
    
    if (x < 2) return x; // edge case
    
    while (left < right) {      // until only 2 or 1 elem remain
        let mid = left + Math.floor ((right - left) / 2); // get the mid point (if it's even the one to the left is taken)
        
        if (mid * mid === x) { // if sqrt is found simply return mid
            return mid;             
        } else if (mid * mid > x){  // if mid^2 is greater than x then eliminate right of mid point
            right = mid;
        } else if (mid * mid < x){ // if mid^2 is less than x eliminate midpoint and the left of mid point
            left = mid + 1;
        }
    }
    
    return left - 1; // if left = right it means there is no exact sqrt in the range. so the one before the left is the closest one to the sqrt
};

// space: O(1) no additional data structure or stored
// time: O(log n) the data set is halfed every loop