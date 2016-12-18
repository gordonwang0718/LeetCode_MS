/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root === null) return false;
    return helper(root, 0, sum);
    
    function helper(root, curSum, sum) {
        if(root === null) return false;
        if(root.val + curSum === sum && root.left === null && root.right === null) return true;
        return helper(root.left, root.val + curSum, sum) || helper(root.right, root.val + curSum, sum);
    }
};