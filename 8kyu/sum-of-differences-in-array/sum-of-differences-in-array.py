def sum_of_differences(arr):
    if len(arr) == 0: return 0
    return max(arr) - min(arr)