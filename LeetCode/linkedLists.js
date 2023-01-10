// *** SETUP CODE:
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}

const initializeLinkListFromArray = (array) => {
  if (array.length === 0) {
    return [];
  }

  let head = new ListNode(array[0]);

  let current = head;

  for (let i = 1; i < array.length; i++) {
    let newNode = new ListNode(array[i]);
    current.next = newNode;
    current = current.next;
  }
  return head;
};

const printLinkedList = (head) => {
  let current = head;
  let printStr = "";

  while (current) {
    printStr += current.val + "->";
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

// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.
function reverseList(head) {
  printLinkedList(head);

  let previous = null;
  let current = head;
  let next;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}

// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by
// splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
function mergeTwoLists(list1, list2) {
  // make new node which will become the returned list:
  let list = new ListNode();
  let head = list;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      list.next = list1;
      list1 = list1.next;
    } else {
      list.next = list2;
      list2 = list2.next;
    }
    list = list.next;
  }

  list.next = list1 || list2;
  return head.next;
}

// setup:
const head1 = initializeLinkListFromArray([1, 5, 6]);
const head2 = initializeLinkListFromArray([2, 3, 4, 7]);
// to print:
printLinkedList(mergeTwoLists(head1, head2));
