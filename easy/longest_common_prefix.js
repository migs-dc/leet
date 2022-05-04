/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    res = "";
    
    for (let i=0; i<strs[0].length; i++){ // iterate through first string
        for (let j=1; j<strs.length; j++){ // compare each i letter of subsequent strings
            if ( strs[j][i] !== strs[0][i]) return res; 
            // if even one letter in one of the strings does not match
            // it will simply return the current res.
        }
        res += strs[0][i]; // the letter is added to string if all characters match
    }
    
    return res; // return res in case all strings are identical
};