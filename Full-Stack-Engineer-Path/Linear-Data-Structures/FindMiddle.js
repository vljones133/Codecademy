const findMiddle = (linkedList) => {
  let fastPointer = linkedList.head;
  let slowPointer = linkedList.head;

  while (fastPointer) {
    fastPointer = fastPointer.next;
    if (fastPointer) {
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
    }
  }

  return slowPointer;
};
