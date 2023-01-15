def expression_matter(a: int, b: int, c: int) -> int:
    return max(
      a + b + c,
      a * b * c,
      a * b + c,
      a * (b + c),
      a + b * c,
      (a + b) * c,
    )


print(expression_matter(2, 1, 2))