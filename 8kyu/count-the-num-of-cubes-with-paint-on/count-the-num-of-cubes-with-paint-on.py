def count_squares(cuts):
    return 1 if cuts == 0 else 6 * cuts * cuts + 2


print(count_squares(0))
print(count_squares(5))
print(count_squares(23))