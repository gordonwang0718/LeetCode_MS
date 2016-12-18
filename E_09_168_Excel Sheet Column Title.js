/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = '';
    while(n > 0) {
        var cur = (n - 1) % 26;
        result = String.fromCharCode(65 + cur) + result;
        // result = String.fromCharCode('A'.charCodeAt() + cur) + result;
        n = Math.floor((n - 1) / 26);
    }
    return result;
};

/*----------------------------------------------------------*/

(1) fromCharCode()

String.fromCharCode(numX,numX,…,numX)

/*fromCharCode()可接受一个或多个Unicode值，然后返回一个字符串。另外该方法是String 的静态方法，字符串中的每个字符都由
单独的数字Unicode编码指定。*/

String.fromCharCode(97, 98, 99, 100, 101)    //返回abcde
