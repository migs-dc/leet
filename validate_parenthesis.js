var isValid = function(s) {
    let hashmap = new Map ([
      [')', '('],
      [']', '['],
      ['}', '{']
    ]);
    
    let stack = "";
    
    for ( let i=0; i<s.length; i++){
        if (s[i] === "(" || s[i] === "[" || s[i] === "{" ){
            stack += s[i];
        } else {
            if ( stack.slice(-1) === hashmap.get(s[i]) ) stack = stack.slice(-1);
            else return false;
        }
    }
    
    return true;
};