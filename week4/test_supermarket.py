import unittest
from supermarket import superMarket

class superMarketTest(unittest.TestCase):

    def setUp(self):
        self.superMarket = superMarket()

    def test_instance(self):
        self.assertIsInstance(self.superMarket, superMarket)

    def test_addItem(self):
        self.superMarket.add_item('test', 10)
        self.assertNotEqual(self.superMarket.cart, [])

    def test_addDiscount(self):
        self.superMarket.add_discount(10)
        self.assertNotEqual(self.superMarket.discounts, [])

    def test_calculatingTotal(self):
        self.superMarket.add_item('test', 20)
        self.superMarket.add_item('test_2', 20)
        self.assertEqual(self.superMarket.calculateTotal(), 40)

    def test_adding_discounts(self):
        self.superMarket.add_discount(10)
        self.superMarket.add_discount(20)
        self.assertEqual(self.superMarket.calculate_discounts(), 0.3)

    def test_applied_discount(self):
        self.superMarket.add_discount(10)
        self.superMarket.add_item('Eggs', 10)
        self.assertEqual(self.superMarket.calculateTotal(), 9)
