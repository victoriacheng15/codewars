from typing import List

def divisible_by(numbers: List[int], divisor: int) -> List[int]: 
    res = []
    for num in numbers:
        if num % divisor == 0:
            res.append(num)
    return res

# def divisible_by(numbers: List[int], divisor: int) -> List[int]: 
#     return [num for num in numbers if num % divisor == 0]