/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

 /* Solution 1 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null || root === p || root === q) return root;
    
    if(root.val > p.val) {
        if(root.val < q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.left, p, q);
        }
    } else {
        if(root.val > q.val) {
            return root;
        } else {
            return lowestCommonAncestor(root.right, p, q);
        }
    }
};


 /* Solution 2 */

/*            5
           /      \
          3        6
        /   \    /   \
       2     4  null null
      / \ 
     1  null
*/ p = 1, q = 4

====> left = lowestCommonAncestor(5.left, 1, 4)
       ====> left = lowestCommonAncestor(3.left, 1, 4)
              ====> left = lowestCommonAncestor(2.left, 1, 4)
                     ====> root === p // 1 = 1;
                     <==== // left = 1
                    right = lowestCommonAncestor(2.right, 1, 4)
                     ====> root === null
                     <==== // right = null
              <====
              right = lowestCommonAncestor(3.right, 1, 4) 
              ====> root === q // 4 = 4;
              <==== // right = 4
       <====
      right = lowestCommonAncestor(5.right, 1, 4)
       ====> root === null
       <====
                   



var lowestCommonAncestor = function(root, p, q) {
    // corner case
    if(root === null) return null;
    // base case return 条件
     if(root === p || root === q) return root;
     
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    
    if(left !== null && right !== null) return root;
    return left === null ? right : left;

};