import { DrawCanvasWorker } from './drawer-work';
import { Point } from './point';
import { TreeBuilder } from './tree-build';
import {TreeNode} from "./tree-node";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const preOrderEl = document.getElementById("pre-order") as HTMLInputElement;
const postOrderEl = document.getElementById("post-order") as HTMLInputElement;
const inOrderEl = document.getElementById("in-order") as HTMLInputElement;

const submitBtn = document.getElementById("submit");

const drawer = new DrawCanvasWorker(ctx);

submitBtn?.addEventListener("click", 
    (e)=>{
        e.preventDefault();
        buildTreeNode();
    }
)


function buildTreeNode(){
    drawer.clearCanvas();
    const preorder = preOrderEl?.value.split('');
    const postorder = postOrderEl?.value.split('');
    const inorder = inOrderEl?.value.split('');

    if(preOrderEl.value  && postOrderEl.value){
        let root = TreeBuilder.buildTreePrePost(preorder, postorder);
        levelOrderTraversal(root, {...rootPos}, 1, 1);
    }
    else if(preOrderEl.value  && inOrderEl.value){
        let root = TreeBuilder.buildTreePreIn(preorder, inorder);
        levelOrderTraversal(root, {...rootPos}, 1, 1);
    }  else if(postOrderEl.value  && inOrderEl.value){
        let root = TreeBuilder.buildTreePostIn(postorder, inorder);
        levelOrderTraversal(root, {...rootPos}, 1, 1);
    }
}

 // Function to print tree in level order for verification
 const rootPos: Point = {
    x: 400, 
    y: 50
}
const distance = 100;

function levelOrderTraversal(root: TreeNode | null, rootPos: Point, direction: number, level: number) {
    const parentPos = {...rootPos};
    rootPos.x = rootPos.x - (direction * distance)/ level;
    rootPos.y = rootPos.y + distance;
    if (!root) return;
    drawer.drawPoint(rootPos, 'black', root.val);

    console.log({level})
    if(level != 1)
        drawer.drawLine(parentPos, rootPos, 'blue');

    levelOrderTraversal(root.left, {...rootPos},  1, level+1);
    levelOrderTraversal(root.right, {...rootPos}, -1, level+1);

}
