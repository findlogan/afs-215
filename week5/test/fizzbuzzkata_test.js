const assert = require('chai').assert;
const fizzbuzzkata = require('../fizzbuzzkata');

describe('fizzbuzzKata', function(){
    it('Kata should return 1', function(){
        assert.equal(fizzbuzzkata(1), 1);
    })
    it('Kata should return 2', function(){
        assert.equal(fizzbuzzkata(2), 2);
    })
})
