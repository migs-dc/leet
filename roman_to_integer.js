/**
 * @param {string} s
 * @return {number}
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    var total = 0;
    
    for (let i=0; i<s.length; i++){        
        if (map[s[i]] < map[s[i+1]]) total -= map[s[i]];
        else total += map[s[i]];
    }
    
    return total;
};

// wrong brute force

var romanToInt = function(s) {
    let total = 0;
    
    for (let x = 0; x < s.length; x++){
        if (s[x] === 'I'){
            if (s[x+1] === 'X'){
                total === total + 9;
                x++;
            } else if (s[x+1] === 'V'){
                total = total + 4;
                x++;
            } else {
                total++;
            }
        } 
        else if (s[x] === 'X'){
            if (s[x+1] === 'C'){
                total === total + 90;
                x++;
            } else if (s[x+1] === 'L'){
                total = total + 40;
                x++;
            } else {
                total = total + 10;
            }
        } 
        else if (s[x] === 'C'){
            if (s[x+1] === 'M'){
                total === total + 900;
                x++;
            } else if (s[x+1] === 'D'){
                total = total + 400;
                x++;
            } else {
                total = total + 100;
            }
        } 
        else if (s[x] == 'V') total = total + 5;
        else if (s[x] == 'L') total = total + 50;
        else if (s[x] == 'D') total = total + 500;
        else if (s[x] == 'M') total = total + 1000;
    }
    
    return total;
    
};