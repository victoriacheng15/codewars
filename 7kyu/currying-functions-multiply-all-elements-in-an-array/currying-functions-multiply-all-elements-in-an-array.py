def multiply_all(arr):
    def w(num):
        return [value * num for value in arr]
    return w
    

print(multiply_all([1, 2, 3])(2))