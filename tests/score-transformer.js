var scores;
QUnit.module('scoreTransformer', { 
  beforeEach: function() {
    scores = [
      ['pie', 5],
      ['beak', 10],
      ['pig', 6],
      ['bar', 5],
      ['cake', 10]
    ];
  }
}, function () {
  QUnit.test('returns an object', function(assert) {
    var burger = ['cheese', 'burger'];
    assert.equal(typeof scoreTransformer(scores), 'object', 'scoreTransformer returns an object');
    assert.notOk(Array.isArray(scoreTransformer(scores)), 'scoreTransformer should NOT return an array');
  });

  QUnit.test('returns score object', function (assert) {
    var expected = {
      5: ['pie', 'bar'],
      6: ['pig'],
      10: ['beak', 'cake']
    };
    assert.equal(scoreTransformer(scores), expected, 'should return correct score object');
    assert.deepEqual(scoreTransformer(scores), expected, 'should return correct score object');
  });
});
