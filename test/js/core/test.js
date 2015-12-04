"use strict";

QUnit.test('Ok Testing', function(assert) {
    assert.ok(true, "true is truthy");
    assert.ok([], "is an empty array");
    assert.ok("non empty", "non-empty string succeeds");
    assert.ok("", "empty string fails");
    assert.ok(null, "null fails");
    assert.ok(undefined, "undefined fails");
    
    
    

} );

QUnit.test("Equal Testing", function(assert) {
  assert.equal(0,0, "Zero = Zero"); 
  assert.strictEqual("", 0, "empty string = 0 succeeds");
  assert.equal("", 0, "empty string = 0 succeeds");
  assert.equal("three", 3, "Three = 3 equal fails");
  
});

QUnit.test("Deep Equel is the best to use", function (assert) {
  let obj = { foo: "Bar"};
  
  assert.deepEqual(obj, {foo: "Bar"}, "Two objects can be the same in value");    
    
});
