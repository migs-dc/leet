/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
    let hashmap = new Map(); // initialize hashmap
    res = -1;
    
    for (let i=0; i<s.length; i++){ // iterate through each char in the string
        if(hashmap.has(s[i])){      // if character is already in hash
            let diff = i - hashmap.get(s[i])- 1; // substract current position to first instance of that character
            if (res < diff) res = diff; // replace res if the difference is bigger
        } else {
            hashmap.set(s[i], i); // place char in hash map if it isn't in there yet
            // key value pair is (<char>, <i>)
        }
    }
    
    return res; // return res, -1 is returned if no identical chars are found
};