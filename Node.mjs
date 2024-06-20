export class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  setLeft(value) {
    this.left = value;
  }

  setRight(value) {
    this.right = value;
  }
}
