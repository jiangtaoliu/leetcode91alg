// Node constructor
class Node {
    constructor(element, next=null) {
      this.element = element;
      this.next = next;
      //console.log('e', this.element);
      //console.log('n', this.next);
    }
  }
  // LinkedList constructor
  class LinkedList {
    constructor() {
      this.head = null;
    }
    // Add a node to the end of the linked list
    push(element) {
      var node = new Node(element);
      //console.log('node', node);
      if (!this.head) {
        this.head = node;
      } else {
        var current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }

    get(index) {
        // ensure `index` is a positive value
        if (index > -1) {
            // the pointer to use for traversal
            let current = this[head];
            // used to keep track of where in the list you are
            let i = 0;
            // traverse the list until you reach either the end or the index
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
            // return the data if `current` isn't null
            return current !== null ? current.data : undefined;
        } else {
            return undefined;
        }
    }
    traverse() {
        let current = this.head;
        console.log('this.head', this.head);
        while (current !== null) {
            console.log(current.element);
            current = current.next;
        }
    }

    // Reverse a single node in the linked list
    reverseNode(node, prev) {
      var newNode = new Node(node.element, prev);
      if (node.next) {
        return this.reverseNode(node.next, newNode);
      } else {
        return newNode;
      }
    }
    // returns the reversed Linked List (i.e. Ⓒ->Ⓑ->Ⓐ->null)
    reversedList() {
      return this.reverseNode(this.head, null);
    }

    reverseLoop(){
      let cur = this.head;
      let pre = null;
      while (cur) {
        const next = cur.next;
        console.log('next', next);
        cur.next = pre;
        console.log('curnext',cur.next);
        pre = cur;
        console.log('pre', pre);
        cur = next;
        console.log('cur', cur);
        console.log('---------------------')
      }
      return pre;
    }
  }
  var list = new LinkedList();
  //console.log('list', list);
  list.push('a');
  list.push('b');
  list.push('c');
  //list.push('d');
  //console.log('list', list);
  //list.traverse();
  //console.log('recersive', list.reversedList());
  //console.log('---------');
  console.log(list.reverseLoop());