// ----- Largest Stack -----

/*
  Use the given Stack class to implement a new MaxStack class that has all 
  the same methods as the base Stack class, along with a getMax method that 
  returns the max value of the MaxStack in O(1) time. getMax should not 
  remove the item.
*/

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length) {
      return this.items.pop();
    }
    return null;
  }

  peek() {
    if (this.items.length) {
      return this.items[this.items.length-1];
    }
    return null;
  }
}

// Pseudo Code

// copy Stack prototype into the new MaxStack class
// add max property
// replace push and pop methods to use new max property
  // track max property as items are pushed and popped
// add getMax method that will return max property