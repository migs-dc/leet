/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    var res = -1;                           // result
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return res // edge case
    
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


// time = O(m*n) or maybe O(n^2)
// space = 0(1) not storing anything

// simple solutino using split

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle == "") return 0;

    const word = haystack.split(needle);    // split haystack string using needle 
    if (word.length == 1) {                 // if haystack wasn't split word would only have 1 elem
        return -1                           // return -1
    }
    
    return word[0].length                   // else return length of first elem because that will denote the start of the needle in the haystack
    
};