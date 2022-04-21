/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    // split s with " "
    // we traverse the resulting array from behind
    // once we find somthing that isn't "" we return the length of that string
    
    
//     // slow as heck solution
//     let arr = s.split(" ");
//     for (let i = arr.length-1; i >= 0; i--){
//         if (arr[i].length >= 1) return arr[i].length; 
//     }
    
    
//     // one liner
//     return s.split(' ').filter((w) => w != '').reverse()[0].length
    
    // efficient pointer solution
    let length = 0;
    
    for (let i = s.length-1; i >= 0; i--){
        if ( s[i] === ' ' ){
            if ( length > 0){
                return length;
            }
        } else {
            length++;
        }
    }
    return length;
    
};