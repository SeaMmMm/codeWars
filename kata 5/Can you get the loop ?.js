function loop_size(node) {
  let fast = (low = node);
  temp = 1;
  do {
    fast = fast.getNext().getNext();
    low = low.getNext();
  } while (low !== fast);

  while (low.getNext() !== fast) {
    temp++;
    low = low.getNext();
  }

  return temp;
}
