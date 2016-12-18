/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count = 0;
    var flag;
    
    if(n === 1) return 0;
    
    for(var i = 2; i < n; i++) {
        flag = true;
        for(var j = 2; j * j <= i; j++) {
            if(i % j === 0) {
                flag = false;
                break;
            }
        }
        if(flag) count++;
    }
    return count;
};