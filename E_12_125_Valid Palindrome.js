/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s === null || s.length === 0) return true;
    var subStr = s.replace(/\W/g, '').toLowerCase();
    if(subStr.length === 0) return true;
    var len = subStr.length;
    for(var i = 0; i < len / 2; i++) {
        if(subStr.charAt(i) !== subStr.charAt(len - 1 - i)) return false;
    }
    return true;
};


var isPalindrome = function(s) {
    if(s === null || s.length === 0) return true;
    var subStr = s.replace(/\W/g, '').toLowerCase();
    if(subStr === null || subStr.length === 0) return true;
    var length = subStr.length;
    for(var i = 0; i < length; i++) {
        if(subStr[i] !== subStr[length - 1 - i]) return false;
    }
    return true;
};