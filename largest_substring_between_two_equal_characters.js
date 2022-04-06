/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
    let hashmap = new Map();
    res = -1;
    
    for (let i=0; i<s.length; i++){
        if(hashmap.has(s[i])){
            let diff = i - hashmap.get(s[i])- 1;
            if (res < diff) res = diff;
        } else {
            hashmap.set(s[i], i);
        }
    }
    
    return res;
};