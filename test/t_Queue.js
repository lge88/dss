var Queue = require('dss').Queue;
var expect = require('expect.js');

describe('Queue', function() {

  it('enqueue', function() {
    var q = new Queue(), arr = [], x;
    for (var i = 0; i < 10; ++i) {
      x = Math.random();
      q.enqueue(x);
      arr.push(x);
    }
    expect(q.toArray()).to.eql(arr);
  });

  it('dequeue', function() {
    var q = new Queue(), arr = [], x;
    var i;
    for (i = 0; i < 10; ++i) {
      x = Math.random();
      q.enqueue(x);
      arr.push(x);
    }
    for (i = 0; i < 10; ++i) {
      expect(q.dequeue()).to.equal(arr.shift());
    }
  });

  it('clear', function() {
    var q = new Queue(), x;
    var i;
    for (i = 0; i < 10; ++i) {
      x = Math.random();
      q.enqueue(x);
    }
    q.clear();
    expect(q.toArray()).to.eql([]);
  });

  it('size&empty', function() {
    var q = new Queue(), x;
    var i;
    for (i = 0; i < 10; ++i) {
      x = Math.random();
      q.enqueue(x);
    }
    expect(q.size()).to.eql(10);
    expect(q.empty()).to.equal(false);

    q.clear();
    expect(q.size()).to.eql(0);
    expect(q.empty()).to.equal(true);
  });

  it('clone', function() {
    var q = new Queue(), x;
    var i;
    for (i = 0; i < 10; ++i) {
      x = Math.random();
      q.enqueue(x);
    }

    var q2 = q.clone();
    expect(q.first()).to.eql(q2.first());
    expect(q.last()).to.eql(q2.last());
    expect(q.toArray()).to.eql(q2.toArray());
    expect(q.size()).to.equal(q2.size());
    expect(q.empty()).to.equal(q2.empty());
  });

});
