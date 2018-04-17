QUnit.module('distanceToBun', function () {
  
  QUnit.test('returns a number', function(assert) {
    var burger = ['cheese', 'burger'];
    assert.equal(typeof distanceToBun(burger, 'cheese'), 'number', 'distance to bun is a number');
  });

  QUnit.test('returns distance to bun for odd length ingredient list', function (assert) {
    var burger = ['cheese', 'burger', 'tomato'];
    assert.equal(distanceToBun(burger, 'cheese'), 0, 'distance to cheese is 0');
    assert.equal(distanceToBun(burger, 'burger'), 1, 'distance to burger is 1');
    assert.equal(distanceToBun(burger, 'tomato'), 0, 'distance to tomato is 0');
  });

  QUnit.test('returns distance to bun for even length ingredient list', function (assert) {
    var burger = ['cheese', 'burger', 'tomato', 'pickles', 'ketchup', 'onion'];
    assert.ok(distanceToBun(burger, 'cheese') === 0, 'distance to cheese is 0');
    assert.ok(distanceToBun(burger, 'burger') === 1, 'distance to burger is 1');
    assert.ok(distanceToBun(burger, 'tomato') === 2, 'distance to tomato is 2');
    assert.ok(distanceToBun(burger, 'pickles') === 2, 'distance to pickles is 2');
    assert.ok(distanceToBun(burger, 'ketchup') === 1, 'distance to ketchup is 1');
    assert.ok(distanceToBun(burger, 'onion') === 0, 'distance to onion is 0');
  });
});
