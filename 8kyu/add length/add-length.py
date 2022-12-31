def add_length(str_):
  res = []
  for word in str_.split(" "):
    res.append(f"{word} {len(word)}")
  return res




print(add_length("apple ban"))