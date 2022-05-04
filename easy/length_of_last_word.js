/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    // split s with " "
    // we traverse the resulting array from behind
    // once we find somthing that isn't "" we return the length of that string

        // efficient pointer solution
        let length = 0;
    
        for (let i = s.length-1; i >= 0; i--){  // traverse from back of string
            if ( s[i] === ' ' ){                // if a space is found
                if ( length > 0){               // check if a word has been found before. if length > 0
                    return length;              // just return length because the last word has been found
                }
            } else {
                length++;                       // otherwise the word is being found letter by letter
            }
        }       
        return length;                          // just return the word causet there were no white spaces at the front of the string    
        
        // time = O(n);
        // space = 0(1);
    
    
//     // slow as heck solution
//     let arr = s.split(" ");
//     for (let i = arr.length-1; i >= 0; i--){
//         if (arr[i].length >= 1) return arr[i].length; 
//     }
    
    
//     // one liner
//     return s.split(' ').filter((w) => w != '').reverse()[0].length
    
//     // apparently 100% faster
//     let i = s.length - 1;
//     let c = 0;
//     while(i >= 0){
//         if (s[i] != ' '){
//             c++;
//             if (i-1 >= 0 && s[i-1] == ' '){
//                 break;
//             }
//         }
//         i--;
//     }
//     return c;
//     // it wasn't
}