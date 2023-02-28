def sum_of_minimums(numbers):
    return sum(map(lambda num: min(num), numbers))


# print(sum_of_minimums([1, 2, 3, 4, 5]))
print(sum_of_minimums([ [7,9,8,6,2 ], [6,3,5,4,3], [5,8,7,4,5] ]))