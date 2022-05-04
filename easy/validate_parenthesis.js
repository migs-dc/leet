/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hashmap = new Map ([
        [')', '('],
        [ ']', '['],
        ['}', '{']
    ]); // hash map for the matching parentheses
    
    let stack = []; // stack to check if open parentheses were all closed
    
    for ( let i=0; i<s.length; i++){ // iterate through string
        if (s[i] === "(" || s[i] === "[" || s[i] === "{" ){ // it the character is open parenthesis
            stack.push(s[i]);                                  // simply place on stack
        } else { // if the char is a close parenthesis
            if ( stack[stack.length-1] === hashmap.get(s[i]) ) stack.pop();
                // check the last char in the stack. if it's the corresponding parenthesis pop stack
            else return false;
                // else the string is invalid. return false
        }
    }
    
    if (stack === "") return true; // if stack was cleared return true
    else return false; // if stack was not cleared return false
};