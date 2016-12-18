/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    if(root === null) return result;
    var queue = [];
    queue.push(root);
    while(queue.length > 0) {
        var length = queue.length;
        var level = [];
        for(var i = 0; i < length; i++) {
            var head = queue.shift();
            level.push(head.val);
            if(head.left) {
                queue.push(head.left);
            }
            if(head.right) {
                queue.push(head.right);
            }
        }
        result.push(level);
    }
    return result;
};