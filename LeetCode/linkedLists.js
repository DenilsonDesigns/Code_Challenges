// *** SETUP CODE:
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}

const initializeLinkedListFromArray = (array) => {
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

// 234. Palindrome Linked List
function isPalindrome(head) {
  // find the middle of the linked list:
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list:
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Compare the first half of the linked list to the reversed second half:
  let p1 = head;
  let p2 = prev;
  while (p2) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
}

// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
function addTwoNumbers(l1, l2) {
  function reverseList(head) {
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

  function getIntegerFromLinkedList(originalList) {
    let r = "";

    let previous = null;
    let current = originalList;
    let next;

    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      r += current.val + "";
      current = next;
    }
    return +r;
  }

  const reversed1 = reverseList(l1);
  const reversed2 = reverseList(l2);

  const sumReversed1 = getIntegerFromLinkedList(reversed1);
  const sumReversed2 = getIntegerFromLinkedList(reversed2);

  const sumOf2Lists = sumReversed1 + sumReversed2;

  const arrayToBeMadeIntoLL = (sumOf2Lists + "")
    .split("")
    .reverse()
    .map((el) => +el);

  return initializeLinkedListFromArray(arrayToBeMadeIntoLL);
}

// 83. Remove Duplicates from Sorted List
var deleteDuplicates = function (head) {
  var curr = head;

  while (curr?.next) {
    if (curr.val === curr.next.val) {
      var prev = curr;
      curr.next = prev.next.next;
    } else {
      if (curr.next) curr = curr.next;
    }
  }

  return head;
};

// 203. Remove Linked List Elements
var removeElements = function (head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let current = dummy;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};

// 160. Intersection of Two Linked Lists
var getIntersectionNode = function (headA, headB) {
  var headALength = getLinkedListLength(headA);
  var headBLength = getLinkedListLength(headB);

  var amountToShorten =
    Math.max(headALength, headBLength) - Math.min(headALength, headBLength);

  if (headALength > headBLength) {
    headA = shortenLinkedList(headA, amountToShorten);
  } else {
    headB = shortenLinkedList(headB, amountToShorten);
  }

  var currentA = headA;
  var currentB = headB;

  while (currentA !== null) {
    if (currentA === currentB) {
      return currentA;
    } else {
      currentA = currentA.next;
      currentB = currentB.next;
    }
  }

  return null;

  function getLinkedListLength(linkedList) {
    var count = 0;
    var current = linkedList;
    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  function shortenLinkedList(linkedList, amount) {
    var current = linkedList;

    for (let i = 0; i < amount; i++) {
      current = current.next;
    }

    return current;
  }
};

// setup:
const head1 = initializeLinkedListFromArray([4, 1, 8, 4, 5]);
const head2 = initializeLinkedListFromArray([5, 6, 1, 8, 4, 5]);
// func to test:
const SUT = getIntersectionNode(head1, head2);

// to print:
console.log(
  //*** */
  SUT,
  // printLinkedList(head1),
  // addTwoNumbers(head1, head2)
  //*** */
  printLinkedList(SUT)
);
