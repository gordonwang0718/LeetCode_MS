/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var length1 = haystack.length;
    var length2 = needle.length;
    
    if(length2 === 0) return 0;
    if(length1 === 0 || length2 > length1) return -1;
    
    var i = 0;
    
    while(i <= length1 - length2) {
        if(haystack.substring(i, i + length2) === needle) {
            return i;
        }
        i++;
    }
    return -1;
};

/*----------------------------------------------------------*/

(1) substring()

stringObject.substring(start,end)

/*substring()是最常用到的字符串截取方法，它可以接收两个参数(参数不能为负值)，分别是要截取的开始位置和结束位置，
它将返回一个新的字符串，其内容是从start处到end-1处的所有字符。若结束参数(end)省略，则表示从start位置一直截取到
最后。*/

var str = 'abcdefg';
console.log(str.substring(1, 4));    //返回bcd
console.log(str.substring(1));    //返回bcdefg
console.log(str.substring(-1));    //返回abcdefg，传入负值时会视为0

(2) slice()

stringObject.slice(start,end)

/*slice()方法与substring()方法非常类似，它传入的两个参数也分别对应着开始位置和结束位置。而区别在于，slice()中的参数
可以为负值，如果参数是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符。*/

var str = 'abcdefg';
console.log(str.slice(1, 4));    //返回bcd
console.log(str.slice(-3, -1));    //返回ef
console.log(str.slice(1, -1));    //返回bcdef
console.log(str.slice(-1, -3));    //返回空字符串，若传入的参数有问题，则返回空

(3) substr()

stringObject.substr(start,length)

/*substr()方法可在字符串中抽取从start下标开始的指定数目的字符。其返回值为一个字符串，包含从 stringObject的start（
包括start所指的字符）处开始的length个字符。如果没有指定 length，那么返回的字符串包含从start到stringObject的结尾
的字符。另外如果start为负数，则表示从字符串尾部开始算起。*/

var str = 'abcdefg';
console.log(str.substr(1, 3))    //返回bcd
console.log(str.substr(2))    //返回cdefg
console.log(str.substr(-2, 4))    //返回fg，目标长度较大的话，以实际截取的长度为准