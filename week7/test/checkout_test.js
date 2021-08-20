const assert = require('chai').assert;
const checkout = require('../checkout');

describe('checkout', function() {
    it('Can create an instance of the Checkout class', function() {
        const ci = new checkout.Checkout();
        assert.equal(typeof ci, 'object');
    });

    it('Can add an item', function(){
        const ci = new checkout.Checkout();
        ci.addItemToCart('Eggs', 10);
        assert.deepEqual(ci.getCart(), [ {item: 'Eggs', price: 10} ]);
    });

    it('Can add an item price', function(){
        const ci = new checkout.Checkout();
        ci.addItemToCart('Eggs', 10);
        assert.deepEqual(ci.getCart(), [ {item: 'Eggs', price: 10} ]);
    });
    
    it('Can calculate current total', function(){
        const ci = new checkout.Checkout();
        ci.addItemToCart('Eggs', 10);
        assert.equal(ci.calculateFinalPrice(), 10);
    });

    it('Can add multiple items and get correct total', function(){
        const ci = new checkout.Checkout();
        ci.addItemToCart('Eggs', 10);
        ci.addItemToCart('Eggs', 10);
        assert.equal(ci.calculateFinalPrice(), 20);
    });

    
    it('Can add discount rules', function(){
        const ci = new checkout.Checkout();
        ci.addDiscount(10);
        assert.deepEqual(ci.getDiscounts(), [10]);
    });

    it('Can apply discounts to the total', function(){
        const ci = new checkout.Checkout();
        ci.addItemToCart('Eggs', 10);
        ci.addDiscount(10);
        // Expected return of: $9
        assert.equal(ci.calculateFinalPrice(), 9);
    });

    it('Exception is thrown for an item added without a price', function() {
        const ci = new checkout.Checkout();
        assert.throws(() => ci.addItemToCart('Eggs'), 'Item was added without a price!');
    })
})
