def distinct(seq):
  seen, result = set(), []
  for num in seq:
    if num not in seen:
      result.append(num)
      seen.add(num)
  return result