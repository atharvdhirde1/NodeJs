const { assert } = require('chai');

var expect = require('chai').expect;

it('assert',function(){
    console.log('assert example')
    assert(true,'test passed')// true
})
it('assert_calls',function(){
   assert.isTrue(true,'true')
    assert.isArray([1,2],'!Array') //[1,2]
})   