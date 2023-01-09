// *** SETUP CODE:
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}

const initializeLinkListFromArray = (array) => {
  if (array.length === 0) {
    return [];
  }

  let head = new Node(array[0]);

  let current = head;

  for (let i = 0; i < array.length; i++) {
    let newNode = new Node(array[i]);
    current.next = newNode;
    current = current.next;
  }
  return head;
};

const printLinkedList = (head) => {
  let current = head;
  let printStr = "";

  while (current) {
    printStr += current.value + "->";
    current = current.next;
  }

  console.log(printStr);
};

// // to use:
// const head = initializeLinkListFromArray([1, 2, 3, 4, 5]);

// printLinkedList(head);

// ********************************************************************
// ********************************************************************

// 876. Middle of the Linked List
// Given the head of a singly linked list, return
// the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

function middleNode(head) {
  var p1 = head;
  var p2 = head;
  while (p2 != null && p2.next != null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return p1;
}

// setup:
const head = initializeLinkListFromArray([1, 2, 3, 4, 5]);
// to print:
printLinkedList(middleNode(head));
