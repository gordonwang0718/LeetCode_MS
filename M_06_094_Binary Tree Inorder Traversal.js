/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 /*Solution 1*/

/*                 15 (Root)
                /      \
               5        20
           /     \    /     \
          3      16  18      23
*/

====> result = [];
       stack = [];
         cur = root // cur = 15
      while(cur !== null || stack.length !== 0)
       ====> (cur !== null)
             stack.unshift(cur);   // stack = [15];
             cur = cur.left;       // cur = 5;
       ====> (cur !== null)
             stack.unshift(cur);   // stack = [5, 15];
             cur = cur.left;       // cur = 3;
       ====> (cur !== null)
             stack.unshift(cur);   // stack = [3, 5, 15];
             cur = cur.left;       // cur = null
       ====> else
             cur = stack.shift();  // cur = 3, stack = [5, 15];
             result.push(cur.val); // result = [3];
             cur = cur.right;      // cur = null;
       ====> else
             cur = stack.shift();  // cur = 5, stack = [15];
             result.push(cur.val); // result = [3, 5];
             cur = cur.right;      // cur = 16;
       ====> (cur !== null)
             stack.unshift(cur);   // stack = [16, 15];
             cur = cur.left;       // cur = null;
       ====> else
             cur = stack.shift();  // cur = 16, stack = [15];
             result.push(cur.val); // result = [3, 5, 16];
             cur = cur.right;      // cur = null;
       ====> else
             cur = stack.shift();  // cur = 15, stack = [];
             result.push(cur.val); // result = [3, 5, 16, 15];
             cur = cur.right;      // cur = 20;
       ...... 




var inorderTraversal = function(root) {
    var result = [];
    var stack = [];
    var cur = root;
    while(cur !== null || stack.length !== 0) {
        if(cur !== null) {
            stack.unshift(cur); // offerFirst
            cur = cur.left;
        } else {
            cur = stack.shift(); // pollFirst
            result.push(cur.val);
            cur = cur.right;
        }
    }
    
    return result;
};