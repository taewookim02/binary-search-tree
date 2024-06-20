import { MergeSort } from "./MergeSort.mjs";
import { Node } from "./Node.mjs";

export class Tree {
  constructor(array = [], root = null) {
    this.array = array;
    this.root = root;
  }

  buildTree(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);

    this.root = node;

    return node;
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  preOrder(node) {
    if (node == null) return;

    console.log(node.data + " ");
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
}
const arr = [23, 235, 1, 2, 3, 4, 7, 9, 0, 234, 32, 18, 23];

const ms = new MergeSort();
ms.sort(arr, 0, arr.length - 1);
console.log(arr);

const tree = new Tree();
const bst = tree.buildTree(arr, 0, arr.length - 1);
// tree.prettyPrint(bst);
tree.prettyPrint(bst);
tree.preOrder(bst);
// console.log("BSTBSTBST:", bst);
