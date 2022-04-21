/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    // split s with " "
    // we traverse the resulting array from behind
    // once we find somthing that isn't "" we return the length of that string
    
    let arr = s.split(" ");
    
    for (let i = arr.length-1; i >= 0; i--){
        if (arr[i].length >= 1) return arr[i].length; 
    }
};