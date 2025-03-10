export class TreeNode {
    val: string; 
    left: TreeNode | null; 
    right: TreeNode | null;

    constructor(val: string) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
