def to_alternating_case(string):
  output = ""
  for char in string:
    if char == char.upper():
      output += char.lower()
    else:
      output += char.upper()
  return output


print(to_alternating_case('hello world'))