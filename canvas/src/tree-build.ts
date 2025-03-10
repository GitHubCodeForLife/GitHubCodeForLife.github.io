import { TreeNode } from "./tree-node";

export class TreeBuilder {
    
        static buildTreePrePost(preorder: string[], postorder: string[]) {
            if (!preorder.length || !postorder.length) return null;
            
            // Root is the first node in preorder
            let root = new TreeNode(preorder[0]);
    
            // If there's only one node, return it
            if (preorder.length === 1) return root;
    
            // The second node in preorder is the left child
            let leftSubtreeRoot = preorder[1];
    
            // Find the left subtree size in postorder
            let leftSubtreeSize = postorder.indexOf(leftSubtreeRoot) + 1;
    
            // Split preorder and postorder into left and right subtrees
            let leftPreorder = preorder.slice(1, leftSubtreeSize + 1);
            let rightPreorder = preorder.slice(leftSubtreeSize + 1);
            let leftPostorder = postorder.slice(0, leftSubtreeSize);
            let rightPostorder = postorder.slice(leftSubtreeSize, -1); // Remove last element (root)
    
            // Recursively build left and right subtrees
            root.left = TreeBuilder.buildTreePrePost(leftPreorder, leftPostorder);
            root.right = TreeBuilder.buildTreePrePost(rightPreorder, rightPostorder);
    
            return root;
        }

        static buildTreePreIn(preorder: string[], inorder: string[]) {
            if (!preorder.length || !inorder.length) return null;
        
            // Root is always the first node in preorder
            let rootVal = preorder[0];
            let root = new TreeNode(rootVal);
        
            // Find index of root in inorder list
            let rootIndex = inorder.indexOf(rootVal);
        
            // Left subtree elements in inorder
            let leftInorder = inorder.slice(0, rootIndex);
            // Right subtree elements in inorder
            let rightInorder = inorder.slice(rootIndex + 1);
        
            // Left subtree elements in preorder
            let leftPreorder = preorder.slice(1, leftInorder.length + 1);
            // Right subtree elements in preorder
            let rightPreorder = preorder.slice(leftInorder.length + 1);
        
            // Recursively construct left and right subtrees
            root.left = TreeBuilder.buildTreePreIn(leftPreorder, leftInorder);
            root.right = TreeBuilder.buildTreePreIn(rightPreorder, rightInorder);
        
            return root;
        }
        static buildTreePostIn(postorder: string[], inorder: string[]) {
            if (!postorder.length || !inorder.length) return null;

            // Root is always the last node in postorder
            let rootVal = postorder.pop(); // Remove last element
            let root = new TreeNode(rootVal as string);
        
            // Find index of root in inorder list
            let rootIndex = inorder.indexOf(rootVal as string);
        
            // Right subtree elements in inorder (must build right first due to pop order)
            let rightInorder = inorder.slice(rootIndex + 1);
            // Left subtree elements in inorder
            let leftInorder = inorder.slice(0, rootIndex);
        
            // Recursively construct right and left subtrees
            // Important: Process right subtree first since we are using `pop()`
            root.right = TreeBuilder.buildTreePostIn(postorder, rightInorder);
            root.left = TreeBuilder.buildTreePostIn(postorder, leftInorder);
        
            return root;
        }
}