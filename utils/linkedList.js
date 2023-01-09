class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}

export const initializeLinkListFromArray = (array) => {
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

export const printLinkedList = (head) => {
  let current = head;
  let printStr = "";

  while (current) {
    printStr += current.value + "->";
    current = current.next;
  }

  console.log(printStr);
};

// to use:
const head = initializeLinkListFromArray([1, 2, 3, 4, 5]);

printLinkedList(head);
