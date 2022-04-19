/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    var res = -1;
    
    for (let i=0; i<haystack.length; i++){
        if (haystack[i] === needle[0]){
            res = i;
            for (let j=1; j<needle.length; j++){
                if (haystack[i+j] !== needle[j]){
                    res = -1;
                    break;
                }
            }
            if (res !== -1) return res;
        }
    }
    
    return res;
};