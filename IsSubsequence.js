/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0;
    
    if (s.length == 0) {
        return true;
    }
    
    for (let tIndex = 0; tIndex < t.length; tIndex++) {
        if (t[tIndex] == s[sIndex]) {
            sIndex++;
            
            if (sIndex == s.length) {
                return true;
            }
        }
    }
    
    return false;
};
