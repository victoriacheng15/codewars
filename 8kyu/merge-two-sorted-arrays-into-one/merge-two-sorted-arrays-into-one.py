# def merge_arrays(arr1, arr2):
#     res = list(set(arr1 + arr2))
#     res.sort()
#     return res

def merge_arrays(arr1, arr2):
    res = sorted(set(arr1 + arr2))
    return res

print(merge_arrays([1, 3, 5, 7], [2, 4, 6, 8]))
print(merge_arrays([1,3,5,7,9], [10,8,6,4,2]))
print(merge_arrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))