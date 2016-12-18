/**
 * @param {number} n - a positive integer
 * @return {number}
 */

/*Solution 1*/
var hammingWeight = function(n) {
	var count = 0;
	for(var i = 0; i < 32; i++) {
		if(n >>> i & 1 !== 0) {
			count++;
		}
	}
	return count;
};

/*Solution 2*/
var hammingWeight = function(n) {
	var count = 0;
	while(n !== 0) {
		if(n  & 1 !== 0) {
			count++;
		}
		n >>>= 1;
	}
	return count;
};
