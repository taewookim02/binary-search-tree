import { MergeSort } from "./MergeSort.mjs";
import { Node } from "./Node.mjs";

export class Tree {
  constructor(array = [], root = null) {
    this.root = root;
  }

  buildTree(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);

    return node;
  }

  constructTree(array, start, end) {
    this.root = this.buildTree(array, start, end);
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

  inOrder(node) {
    if (node == null) return;

    this.inOrder(node.left);
    console.log(node.data + " ");
    this.inOrder(node.right);
  }

  postOrder(node) {
    if (node == null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data + " ");
  }

  insert(input) {
    this.root = this.insertNode(this.root, input);
  }

  insertNode(node, input) {
    if (node === null) return new Node(input);

    if (input < node.data) {
      node.left = this.insertNode(node.left, input);
    } else if (input > node.data) {
      node.right = this.insertNode(node.right, input);
    }

    return node;
  }

  find(input) {
    return this.findNode(this.root, input);
  }

  findNode(node, input) {
    if (node === null) {
      console.log("node is null, return");
      return null;
    }

    if (input < node.data) {
      return this.findNode(node.left, input);
    } else if (input > node.data) {
      return this.findNode(node.right, input);
    } else if (input === node.data) {
      console.log("found!");
      console.log(node);
      return node;
    }
  }
}
const arr = [235, 1, 2, 3, 4, 7, 9, 0, 234, 32, 18, 23];

const ms = new MergeSort();
ms.sort(arr, 0, arr.length - 1);

const tree = new Tree();
tree.constructTree(arr, 0, arr.length - 1);

tree.insert(8);
tree.insert(82);
tree.insert(1);
tree.insert(3);
tree.insert(4);
tree.insert(5);

const nodeFound = tree.find(5);
console.log(nodeFound); // node
tree.prettyPrint(tree.root);
