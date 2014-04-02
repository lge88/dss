function Queue() {
  function QNode(v) { this.val = v; this.next = null; }
  var head = null, tail = null, len = 0;
  return {
    first: function() { return (head && head.val) || undefined; },
    last: function() { return (tail && tail.val) || undefined; },
    empty: function() { return head === null; },
    size: function() { return len; },
    clear: function() { head = tail = null; len = 0; },
    enqueue: function(v) {
      var n = new QNode(v);
      if (this.empty()) {
        head = tail = n;
      } else {
        tail.next = n;
        tail = n;
      }
      ++len;
    },
    dequeue: function() {
      if (this.empty()) throw new Error("Dequeue an empty queue.");
      var val = head.val;
      head = head.next;
      --len;
      return val;
    },
    clone: function() {
      var q = new Queue();
      var n = head;
      while (n) { q.enqueue(n.val); n = n.next; }
      return q;
    },
    toArray: function() {
      var out = [];
      var n = head;
      while (n) { out.push(n.val); n = n.next; }
      return out;
    }
  };
}

if (typeof module !== "undefined") {
  module.exports = exports = Queue;
}
