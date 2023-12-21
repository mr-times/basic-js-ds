const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.q = null;
  }

  getUnderlyingList() {
    return this.q;
  }

  enqueue(value) {

    if (this.q === null) {
      this.q = new ListNode(value);
    } else {
      let target = this.q;
      while (target.next) {
        target = target.next;
        }
        target.next = new ListNode(value);
      }
  }

  dequeue() {
    let target = this.q;
    this.q = target.next;

    return target.value;
  }
}

module.exports = {
  Queue
};
