/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    var res = -1;                           // result
    
    for (let i=0; i<haystack.length; i++){  // iterate through haystack
        if (haystack[i] === needle[0]){     // current elem in haystack is same as first elem in needle
            res = i;                        // if it is change res to i
            for (let j=1; j<needle.length; j++){    // iterate through next elem in needle and check the next elem in the haystack as well
                if (haystack[i+j] !== needle[j]){
                    res = -1;                       // if they don't match just put res back to -1 and break
                    break;
                }
            }
            if (res !== -1) return res;             // if after the inner for loop the res is not -1 it means that the needle was found in the heystack
        }
    }
    
    return res; // -1 will just be returned if needle is not found
};