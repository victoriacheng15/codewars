def converter(mpg: int) -> float:
    kpl = mpg * 1.609344 / 4.54609188
    return round(kpl, 2)

print(converter(12))