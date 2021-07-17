import unittest
from fizzbuzzkata import FizzBuzz

class FizzBuzzTest(unittest.TestCase):
    def test_1(self):
        self.assertEqual("1", FizzBuzz(1))
    def test_2(self):
        self.assertEqual("2", FizzBuzz(2))
    def test_fizz(self):
        self.assertEqual("Fizz", FizzBuzz(3))
    def test_buzz(self):
        self.assertEqual("Buzz", FizzBuzz(5))
    def test_FizzBuzz(self):
        self.assertEqual("FizzBuzz", FizzBuzz(15))