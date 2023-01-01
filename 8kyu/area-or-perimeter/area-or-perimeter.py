def area_or_perimeter(l , w):
    if l == w:
      return l * w
    return 2 * (l + w)

print(area_or_perimeter(3, 3))
print(area_or_perimeter(6, 10))