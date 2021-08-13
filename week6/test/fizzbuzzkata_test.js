const assert = require('chai').assert;
const fizzbuzzkata = require('../fizzbuzzkata');

describe('fizzbuzzKata', function(){
    it('Kata should return 1', function(){
        assert.equal(fizzbuzzkata(1), 1);
    })
    it('Kata should return 2', function(){
        assert.equal(fizzbuzzkata(2), 2);
    })
    it('Kata should return "Fizz"', function(){
        assert.equal(fizzbuzzkata(3), "Fizz");
    })
    it('Kata should return "Buzz"', function(){
        assert.equal(fizzbuzzkata(5), "Buzz");
    })
    it('Kata should return "Fizz" when I pass: 6', function(){
        assert.equal(fizzbuzzkata(6), "Fizz");
    })
    it('Kata should return "Buzz" when I pass: 10', function(){
        assert.equal(fizzbuzzkata(10), "Buzz");
    })
    it('Kata should return "FizzBuzz" when I pass: 15', function(){
        assert.equal(fizzbuzzkata(15), "FizzBuzz");
    })
})
