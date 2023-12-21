const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = addData(this.root, data);


    function addData(node, data) {
      if (!node) {
        return new Node(data);
      } else if (node.data === data) {
        return node;
      }


      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;

    }
  }

  has(data) {
    return hasData(this.root, data);


    function hasData(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return node;
      }


      if (data < node.data) {
        return hasData(node.left, data);
      } else {
        return hasData(node.right, data);
      }
    }
  }

  find(data) {
    return findData(this.root, data);


    function findData(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return node;
      }


      if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.root = removeData(this.root, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      }



      if (data === node.data) {
        if (!node.right && !node.left) {
          return null;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        let targetNode = node.right;
        while (targetNode.left) {
          targetNode = targetNode.left;
        }
        node.data = targetNode.data;

        node.right = removeData(node.right, targetNode.data);
        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

const bst = new BinarySearchTree();
console.log(bst.root);
bst.add(10);
bst.add(5);
bst.add(17);
bst.add(12);
bst.add(6);
bst.add(18);
bst.add(137);
bst.add(2);
bst.add(22);
bst.add(35);
console.log(bst);
console.log(bst.find(17));
console.log(`maximum: ${bst.max()}`);
console.log(`minimum: ${bst.min()}`);
console.log(`17 exist ${bst.has(17)}`);
console.log(`10 exist ${bst.has(10)}`);
console.log(`5 exist ${bst.has(5)}`);
bst.remove(17);
console.log(`17 exist ${bst.has(17)}`);
console.log(`10 exist ${bst.has(10)}`);
console.log(`5 exist ${bst.has(5)}`);

console.log(`maximum: ${bst.max()}`);
console.log(`minimum: ${bst.min()}`);


module.exports = {
  BinarySearchTree
};