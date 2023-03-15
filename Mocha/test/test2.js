const assert = require('chai').assert;
function add(a,b){
    return a+b;
}

function sub(c,d){
    return c-d;
}

function multi(e,f){
    return e*f;
}
describe('add',function(){
    it('adding of a and b',function(){
        assert.equal(add(3,3),6);
    });

    it('substract of c and d',function(){
        assert.equal(sub(5,3),2);
    });

    it('Multiplication of e and f',function(){
        assert.equal(multi(4,4),16);
    });
});