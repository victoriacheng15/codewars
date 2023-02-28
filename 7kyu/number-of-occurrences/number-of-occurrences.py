# def number_of_occurrences(element, sample):
#     return list(filter(lambda item: item == element, sample)).count(element)

def number_of_occurrences(element, sample):
    return sample.count(element)


print(number_of_occurrences(0, [0, 1, 2, 2, 3]))
print(number_of_occurrences(4, [0, 1, 2, 2, 3]))
print(number_of_occurrences(2, [0, 1, 2, 2, 3]))