var isPalindrome = function(x) {
    if (x === 0) {
        return true;
    }
    
    if (x < 0 || x % 10 === 0) {
        return false;
    }
    
    var reversed_integer = 0;
    while(x > reversed_integer){
        let pop = x % 10;
        x /= 10;
        
        reversed_integer = (reversed_integer * 10) + pop;
    }
    
    if (x === reversed_integer || x === reversed_integer / 10) {
        return true;
    } 
    return false;
};