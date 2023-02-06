def positive_sum(arr):
    return sum(filter(lambda num: num > 0, arr))

print(positive_sum([1, 2, 3, 4, 5]))
print(positive_sum([-1, 2, 3, 4, -5]))