QUnit.module('distanceToBun', function () {//names of tests are organized under this module, all tests under this module are preceeded by the name distanceToBun
  
  QUnit.test('returns a number', function(assert) {//a test is added to the module. The name of the test is 'returns a number'. The test is a function accepts an assert that calls the test
    var burger = ['cheese', 'burger'];//initializes the burger variable to be an array of ingredients
    assert.equal(typeof distanceToBun(burger, 'cheese'), 'number', 'distance to bun is a number');//the assert is ran using the comparison .equal to compare the return value of running the function to the value that you expect
  });

  QUnit.test('returns distance to bun for odd length ingredient list', function (assert) {//creates a test with a name and accepts an assert
    var burger = ['cheese', 'burger', 'tomato'];//initializes burger to be an array of ingredients
    assert.equal(distanceToBun(burger, 'cheese'), 0, 'distance to cheese is 0');//asserts that cheese is on top of the bottom bun, returns the second argument
    assert.equal(distanceToBun(burger, 'burger'), 1, 'distance to burger is 1');//asserts that the burger is 1 away from each bun, returns the second argument
    assert.equal(distanceToBun(burger, 'tomato'), 0, 'distance to tomato is 0');//asserts that the tomato is touching the top bun, returns the second argument
  });

  QUnit.test('returns distance to bun for even length ingredient list', function (assert) {//creates another test with a name and it accepts an asert
    var burger = ['cheese', 'burger', 'tomato', 'pickles', 'ketchup', 'onion'];//initializes burger to be an array of ingredients
    assert.ok(distanceToBun(burger, 'cheese') === 0, 'distance to cheese is 0');//asserts that distanceToBun will return 0 and will equal the expected value of 0, if it does it will return true, if it doesen't it will return false
    assert.ok(distanceToBun(burger, 'burger') === 1, 'distance to burger is 1');//asserts that distanceToBun will return 1 and will equal the expected value of 1, if it does it will return true, if it doesen't it will return false
    assert.ok(distanceToBun(burger, 'tomato') === 2, 'distance to tomato is 2');//asserts that distanceToBun will return 2 and will equal the expected value of 2, if it does it will return true, if it doesen't it will return false
    assert.ok(distanceToBun(burger, 'pickles') === 2, 'distance to pickles is 2');//asserts that distanceToBun will return 2 and will equal the expected value of 2, if it does it will return true, if it doesen't it will return false
    assert.ok(distanceToBun(burger, 'ketchup') === 1, 'distance to ketchup is 1');//asserts that distanceToBun will return 1 and will equal the expected value of 1, if it does it will return true, if it doesen't it will return false
    assert.ok(distanceToBun(burger, 'onion') === 0, 'distance to onion is 0');//asserts that distanceToBun will return 0 and will equal the expected value of 0, if it does it will return true, if it doesen't it will return false
  });
});
