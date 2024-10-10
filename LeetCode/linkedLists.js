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
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return dummy.next;
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

// 2807. Insert greatest common divisors in linked lists.
var insertGreatestCommonDivisors = function (head) {
  let current = head;

  while (current.next !== null) {
    // get the common divisor of current, and current.next
    const commonDivisor = getHighestCommonDivisor(
      current.val,
      current.next.val
    );

    const nodeToBeInserted = new ListNode(commonDivisor);

    nodeToBeInserted.next = current.next;
    current.next = nodeToBeInserted;
    current = nodeToBeInserted.next;
  }

  return head;

  function getHighestCommonDivisor(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
};

// 2181. Merge Nodes in Between Zeros
var mergeNodes = function (head) {
  // Create new node to start from:
  let outList = new ListNode(0);
  // Current pointer on the returning LL:
  let outListHeadCurr = outList;
  // Current position passed in LL
  let current = head.next;

  // Running counter to track what to push:
  let counter = 0;

  // Checking we have a current node:
  while (current !== null) {
    // Incrementing counter if its not 0:
    if (current.val !== 0) {
      counter += current.val;
    } else {
      // Appending new node with current counter:
      outListHeadCurr.next = new ListNode(counter);
      // Moving pointer to be at the just appending node:
      outListHeadCurr = outListHeadCurr.next;
      // Resetting counter:
      counter = 0;
    }
    // Moving pointer of passed in LL:
    current = current.next;
  }

  return outList.next;
};

// 1669. Merge In Between Linked Lists
var mergeInBetween = function (list1, a, b, list2) {
  let current = list1;
  let openingNode = null;
  let closeNode = null;

  let count = 0;

  while (current !== null) {
    if (count + 1 === a) {
      openingNode = current;
    }
    if (count - 1 === b) {
      closeNode = current;
    }
    count++;
    current = current.next;
  }

  openingNode.next = list2;

  let current2 = list2;

  while (current2.next !== null) {
    current2 = current2.next;
  }

  current2.next = closeNode;

  return list1;
};

// 141. Linked List Cycle
// (Tortoise and hare approach)
var hasCycle = function (head) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) {
      return true;
    }
  }
  return false;
};

// 19. Remove Nth Node From End of List
var removeNthFromEnd = function (head, n) {
  let current = head;
  // iterate through whole list and get length.

  let listLength = 0;

  while (current) {
    listLength++;
    current = current.next;
  }

  if (listLength === n) {
    return head.next;
  }

  let nextCurrent = head;
  let idx = 0;
  while (nextCurrent) {
    if (idx === listLength - n - 1) {
      nextCurrent.next = nextCurrent.next.next;
      break;
    }
    nextCurrent = nextCurrent.next;

    idx++;
  }

  return head;
};

// 2487. Remove Nodes From Linked List
var removeNodes = function (head) {
  const reverseList = (node) => {
    let prev = null;
    let curr = node;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };

  let reversedList = reverseList(head);

  let dummy = new ListNode(0);
  dummy.next = reversedList;
  let current = dummy;
  let rolligHighest = 0;

  while (current.next !== null) {
    if (current.next.val >= rolligHighest) {
      rolligHighest = current.next.val;
      current = current.next;
    } else {
      current.next = current.next.next;
    }
  }

  return reverseList(dummy.next);
};

// 24. Swap Nodes in Pairs
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next.next;

    first.next = second.next;
    second.next = first;
    current.next = second;

    current = first;
  }

  return dummy.next;
};

// 2. Add Two Numbers
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;

  let carry = 0;

  while (l1 || l2 || carry) {
    let v1 = l1?.val ? l1.val : 0;
    let v2 = l2?.val ? l2.val : 0;

    // new digit:
    let val = v1 + v2 + carry;
    // new carry:
    carry = Math.floor(val / 10);
    val = val % 10;
    curr.next = new ListNode(val);

    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};

// xxx. GPT reverse linked list
function reverseList(head) {
  // Iteratively:
  let prev = null;
  let curr = head; // 1

  while (curr) {
    let nxt = curr.next; // 2
    curr.next = prev; // null
    prev = curr; // 1
    curr = nxt; // 2
  }

  return prev;
}

// setup:
const head1 = initializeLinkedListFromArray([1, 2, 3, 4, 5]);
// func to test:
// ***********************************
const SUT = reverseList(head1); // ****
// ***********************************

// to print:
console.log(
  //*** */
  SUT,
  // printLinkedList(head1),
  // addTwoNumbers(head1, head2)
  //*** */
  printLinkedList(SUT)
);
