// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   // O(1) time | O(1) space
//   setHead(node) {
//     // if there is currently no head to the DLL/
//     // that means this is the only node/
//     // and it will be the head and the tail.
//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//       return;
//     }
//     // else, insert this node before the current head.
//     return this.insertBefore(this.head, node);
//   }

//   // O(1) time | O(1) space
//   setTail(node) {
//     // if the DLL currently has no tail/
//     // its implied its the only node/
//     // therefore, set node to tail && head.
//     if (this.tail === null) {
//       this.setHead(node);
//       return;
//     }
//     // else, insert node after current tail
//     return this.insertAfter(this.tail, node);
//   }

//   // O(1) time | O(1) space
//   insertBefore(targetNode, nodeToInsert) {
//     // if node we are inserting is the head/
//     // and the tail, do nothing.
//     if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
//     // "remove" will adjust head and tail if the nodeToInsert/
//     // was head or tail, and will remove bindings this node/
//     // had to other nodes.
//     this.remove(nodeToInsert);
//     // adjusting the prev node to be the node/
//     // that was previously the prev of the targetNode.
//     nodeToInsert.prev = targetNode.prev;
//     // as this is insertBefore, .next will now be/
//     // the target node.
//     nodeToInsert.next = targetNode;
//     // if targetNode did not have prev prop./
//     // that means it was the head, so set head/
//     // to nodeToInsert.
//     if (targetNode.prev === null) {
//       this.head = nodeToInsert;
//     } else {
//       // targetNode was not the head/
//       // set node before targetnode's next/
//       // to be nodetoinsert.
//       targetNode.prev.next = nodeToInsert;
//     }
//     // targetnodes prev will now be nodeToinsert.
//     // we dont need to set targetNode.next as the/
//     // insertion is happening in front of targetNode/
//     // so targetNode.next doesnt need to change.
//     targetNode.prev = nodeToInsert;
//   }

//   // O(1) time | O(1) space
//   insertAfter(targetNode, nodeToInsert) {
//     // if the nodeToInsert is the tail and the head, return
//     if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
//     // "remove" will adjust head and tail if the nodeToInsert/
//     // was head or tail, and will remove bindings this node/
//     // had to other nodes.
//     this.remove(nodeToInsert);
//     // this is mostly self-explanatory.
//     nodeToInsert.prev = targetNode;
//     nodeToInsert.next = targetNode.next;
//     //
//     if (targetNode.next === null) {
//       // this means that the targetNode was the tail.
//       // make nodeToInsert the tail now.
//       this.tail = nodeToInsert;
//     } else {
//       // if targetnode was not the tail/
//       // set the former node following targetNode/
//       // to point back to nodeToInsert.
//       targetNode.next.prev = nodeToInsert;
//       // targetNode.next.next does not need to change/
//       // as that will still keep its next node.
//     }
//     targetNode.next = nodeToInsert;
//   }

//   // O(p) time | O(1) space
//   // where p equals the position.
//   insertAtPosition(position, nodeToInsert) {
//     // position 1 would be the head/
//     // so set nodeToInsert to be the head.
//     if (position === 1) {
//       return this.setHead(nodeToInsert);
//     }
//     // starting from the head, and at position 1/
//     // this will iterate through until we have the node at/
//     // "position"
//     let currNode = this.head;
//     let currPos = 1;
//     while (currNode !== null && currPos++ !== position)
//       currNode = currNode.next;
//     // if the node.next at "position" is null/
//     // it means we are inserting at the end (ie, the tail)/
//     // if its not null, it means there is a valid node to/
//     // insert before, therefore we insert before that node.next.
//     if (currNode !== null) {
//       this.insertBefore(currNode, nodeToInsert);
//     } else {
//       this.setTail(nodeToInsert);
//     }
//   }

//   // O(n) time | O(1) space
//   removeNodesWithValue(value) {
//     // starting from the head/
//     // keep iterating through all valid nodes/
//     // til we find the node.value === value/
//     // then remove it.
//     let currNode = this.head;
//     while (node !== null) {
//       const nodeToRemove = currNode;
//       currNode = currNode.next;
//       if (nodeToRemove.value === value) this.remove(nodeToRemove);
//     }
//   }

//   // O(1) time | O(1) space.
//   remove(node) {
//     if (node === this.head) this.head = this.head.next;
//     if (node === this.tail) this.tail = this.tail.prev;
//     this.removeBindings(node);
//   }

//   // O(n) time | O(1) space.
//   containsNodeWithValue(value) {
//     // this method doesnt appear to be used in the solution...
//     // iterates through til there is either a node that is null (ie last)/
//     // or a node with the "value"/
//     // return statement will show if it found a node with the value or/
//     // it got to the end of the DLL.
//     let currNode = this.head;
//     while (currNode !== null && currNode.value !== value)
//       currNode = currNode.next;
//     return currNode !== null;
//   }

//   // O(1) time | O(1) space;
//   removeBindings(node) {
//     if (node.prev !== null) node.prev.next = node.next;
//     if (node.next !== null) node.next.prev = node.prev;
//     node.prev = null;
//     node.next = null;
//   }
// }

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null) {
    let nextDistinctNode = currentNode.next;
    while (
      nextDistinctNode !== null &&
      nextDistinctNode.value === currentNode.value
    ) {
      nextDistinctNode = nextDistinctNode.next;
    }

    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }
  return linkedList;
}
