from typing import List, Callable

# def _all(seq: List, fun: Callable) -> bool:
#     if not seq:
#         return True
#     for item in seq:
#         if not fun(item):
#             return False
#     return True

def _all(seq: List, fun: Callable) -> bool: 
    return all(map(fun,seq))


import unittest

class TestAll(unittest.TestCase):
    def test_empty_list(self):
        self.assertTrue(_all([], lambda x: x > 0))

    def test_all_pass(self):
        self.assertTrue(_all([1, 2, 3, 4, 5], lambda x: x < 10))

    def test_some_fail(self):
        self.assertFalse(_all([1, 2, 3, 4, 5], lambda x: x > 2))

    def test_all_fail(self):
        self.assertFalse(_all([1, 2, 3, 4, 5], lambda x: x > 5))

if __name__ == '__main__':
    unittest.main()
