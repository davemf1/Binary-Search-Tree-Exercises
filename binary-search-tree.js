class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // If there is no element in the tree, the val is inserted in the root node.
    if (this.root === null) this.root = new Node(val);

    let current = this.root;
    while (true) {
      // If the val is less than value of current node
      if (val < current.val) {
        // If there is no left node
        if (current.left === null) current.left = new Node(val);
        // If there is left node, move to that node
        else current = current.left;
      } else if (val > current.val) {
        // If there is no right node
        if (current.right === null) current.right = new Node(val);
        // If there is right node, move to that node
        else current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // If there is no element in the tree, the val is inserted in the root node.
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      // If there is no left node
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      // If there is left node, move to that node
      else return insertRecursively(val, current.left);
    } else if (val > current.val) {
      // If there is no right node
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      // If there is right node, move to that node
      else return insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // If there is no element in the tree
    if (!this.root) return undefined;

    let current = this.root;
    while (current) {
      // If the value is found
      if (val === current.val) return current;
      // if the value is on left
      else if (val < current.val) current = current.left;
      // If value is on the right
      else current = current.right;
    }

    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    // If there is no element in the tree
    if (!this.root) return undefined;

    // If the value is found
    if (val === current.val) return current;
    // if the value is on left
    else if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    }
    // If value is on the right
    else {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    result = []; // store node values in an array

    current = this.root;

    function traverse(node) {
      result.push(node.val); // push node values in an array

      if (node.left) return traverse(node.left); // If there is left node

      if (node.right) return traverse(node.right); // If there is right node
    }

    traverse(current);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    result = []; // store node values in an array

    current = this.root;

    function traverse(node) {
      if (node.left) return traverse(node.left); // If there is left node

      result.push(node.val); // push node values in an array

      if (node.right) return traverse(node.right); // If there is right node
    }

    traverse(current);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    result = []; // store node values in an array

    current = this.root;

    function traverse(node) {
      if (node.left) return traverse(node.left); // If there is left node

      if (node.right) return traverse(node.right); // If there is right node

      result.push(node.val); // push node values in an array
    }

    traverse(current);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
