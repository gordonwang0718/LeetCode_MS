/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums === null || nums.length === 0) return 0;
    var slow = 0;
    for(var fast = 1; fast < nums.length; fast++) {
        if(nums[fast] !== nums[slow]) {
            nums[++slow] = nums[fast];
        }
    }
    return slow + 1;
};