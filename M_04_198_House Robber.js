/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums === null || nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    
    var result = [];
    
    result[0] = nums[0];
    result[1] = Math.max(nums[1], nums[0]);
    
    for(var i = 2; i < nums.length; i++) {
        result[i] = Math.max(result[i - 2] + nums[i], result[i - 1]);
    }
    
    return result[nums.length - 1];
};