/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    var result = [];
    
    for(var i = 0; i < nums.length; i++) {
        var val = nums[i];
        var neededVal = target - val;
        if(neededVal in map) {
            result.push(map[neededVal]);
            result.push(i);
            break;
        } else {
            map[val] = i;
        }
    }
    return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    var result = [];
    
    for(var i = 0; i < nums.length; i++) {
        var tmp = target - nums[i];
        if(map[tmp] !== undefined) {
            result.push(map[tmp]);
            result.push(i);
        } else {
            map[nums[i]] = i;
        }
    }
    return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = [];
    
    for(var i = 0; i < nums.length; i++) {
        var tmp = target - nums[i];
        if(map[tmp] !== undefined) return [map[tmp], i];
        map[nums[i]] = i;
    }
};