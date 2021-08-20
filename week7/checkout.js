class Checkout {
    
    cart = [];
    discounts = [];

    addItemToCart(item, price) {
        if (!price) {
            throw 'Item was added without a price!';
        }
        this.cart.push({ item, price})
        return 'Item added to cart!';
    }

    getCart() {
        return this.cart;
    }
    
    addDiscount(percentage) {
        this.discounts.push(percentage);
    } 

    getDiscounts() {
        return this.discounts;
    }
    
    calculateFinalPrice() {
        // Get Price of all items
        let totalPrice = 0;
        this.cart.forEach(item => {
            totalPrice = totalPrice += item.price;
        });
        
        // Apply Discounts
        let totalPercentageOff = 0;
        this.discounts.forEach(discount => {
            totalPercentageOff = totalPercentageOff += discount;
        });
        
        const usableDiscount = totalPercentageOff / 100;
        const discountedAmount = totalPrice * usableDiscount;
        totalPrice = totalPrice - discountedAmount;

        // Return
        return totalPrice;
    }

}

module.exports = { Checkout }