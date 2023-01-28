# def multiple_of_index(arr):
#     res = []
#     for i, num in enumerate(arr):
#         if i != 0 and num % i == 0:
#             res.append(num)
#     return res

def multiple_of_index(arr):
    return [num for idx, num in enumerate(arr) if idx and num % idx == 0]

print(multiple_of_index([22, -6, 32, 82, 9, 25]))