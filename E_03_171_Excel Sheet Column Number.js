/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0;
    for(var i = 0; i < s.length; i++) {
        result += Math.pow(26, s.length - i - 1) * (s.charAt(i).charCodeAt() - 'A'.charCodeAt() + 1);
        // result += Math.pow(26, s.length - i - 1) * (s.charAt(i).charCodeAt() - 65 + 1);

    }
    return result;
};

/*----------------------------------------------------------*/

(1) charAt()

stringObject.charAt(index)

/*charAt()方法可用来获取指定位置的字符串，index为字符串索引值，从0开始到string.leng - 1，若不在这个范围将返回一个空
字符串。如：*/

var str = 'abcde';
console.log(str.charAt(2));        //返回c
console.log(str.charAt(8));        //返回空字符串

(2) charCodeAt()

stringObject.charCodeAt(index)

/*charCodeAt()方法可返回指定位置的字符的Unicode编码。charCodeAt()方法与charAt()方法类似，都需要传入一个索引值作为参
数，区别是前者返回指定位置的字符的编码，而后者返回的是字符子串。*/

var str = 'abcde';
console.log(str.charCodeAt(0));        //返回97