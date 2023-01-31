import functools
from typing import List

def grow(arr: List[int]) -> int:
    return functools.reduce(lambda x, y: x * y, arr)

# def grow(arr: List[int]) -> int:
#     prod = 1
#     for num in arr:
#         prod *= num
#     return prod



print(grow([1, 2, 3, 4])) #24