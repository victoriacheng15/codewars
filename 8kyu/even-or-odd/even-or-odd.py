# def even_or_odd(number: int) -> str:
#   if number % 2 == 0:
#     return "Even"
#   else:
#     return "Odd"
  
def even_or_odd(number: int) -> str:
  return "Even" if number % 2 == 0 else "Odd"


import unittest

class TestEvenOrOdd(unittest.TestCase):
    def test_even_number(self):
        self.assertEqual(even_or_odd(4), "Even")

    def test_odd_number(self):
        self.assertEqual(even_or_odd(5), "Odd")

    def test_negative_even_number(self):
        self.assertEqual(even_or_odd(-4), "Even")

    def test_negative_odd_number(self):
        self.assertEqual(even_or_odd(-5), "Odd")

    def test_zero(self):
        self.assertEqual(even_or_odd(0), "Even")

if __name__ == '__main__':
    unittest.main()