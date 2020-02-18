/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mapping = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let sum = 0;
    
    for (let index = 0; index < s.length; index++) {
        if (index == s.length - 1 || mapping[s[index]] >= mapping[s[index+1]]) {
            sum += mapping[s[index]];
        } else {
            sum -= mapping[s[index]];
        }
    }
    
    return sum;
};
