/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    return Math.max(helper(0, nums.length - 1, nums), helper(1, nums.length, nums));
};

function helper(start, end, nums) {
    var result = [];
    
    if (end - start <= 1) return nums[start];
    result[start] = nums[start];
    result[start + 1] = Math.max(nums[start], nums[start + 1]);
    
    for (var i = start + 2; i < end; i++) {
        result[i] = Math.max(result[i - 1], result[i - 2] + nums[i]);
    }
    
    return result[end - 1];
}