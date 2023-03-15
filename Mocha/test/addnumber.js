const assert = require('chai').assert;
function add(a, b) {
  return a + b;
}
function sub(c, d) {
  return c - d;
}
function multi(e, f) {
  return e * f;
}
describe('add', function() {
  it('should add two numbers together', function() {
    assert.equal(add(3, 3), 6);//adding exactly value
  });
  it('should subtract the number', function() {
    assert.equal(sub(3, 1), 2);
  });
  it('should multiple the number', function() {
    assert.equal(multi(4, 4), 16);
  });
});