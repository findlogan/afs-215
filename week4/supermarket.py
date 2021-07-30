class superMarket:
    def __init__(self):
        self.cart = list()
        self.discounts = list()
        
    def add_discount(self, percentage):
        self.discounts.append(percentage)

    def add_item(self, name, price):
        if type(price) != int:
            # Raise exception without a integer for a price
            raise ValueError('Price must be a number!')
        self.cart.append({"name": str(name), "price": int(price)})

    def calculate_discounts(self):
        self.totalDiscount = 0
        for discount in self.discounts:
            self.totalDiscount = int(discount) + int(self.totalDiscount)
        totalDiscounts = int(self.totalDiscount) / 100
        return totalDiscounts

    def calculateTotal(self):
        totalPrice = 0
        for item in self.cart:
            totalPrice = totalPrice + item['price']
        if len(self.discounts) != 0:
            discountValue = self.calculate_discounts()
            totalDiscount = discountValue * totalPrice
            totalPrice = totalPrice - totalDiscount
        return round(totalPrice, 2)

# # Instance Example
# # Creating instance of supermarket
# sm = superMarket()

# # Adding items to cart in supermarket
# sm.add_item('coffee', 10)
# sm.add_item('eggs', 5)
# sm.add_item('cookies', 3)

# # Printing total before discounts ($18)
# print(sm.calculateTotal())

# # Adding discount of 10%
# sm.add_discount(10)

# # Printing total after discounts ($16.20)
# print(sm.calculateTotal())

