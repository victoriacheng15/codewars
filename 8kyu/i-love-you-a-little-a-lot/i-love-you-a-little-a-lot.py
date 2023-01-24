def how_much_i_love_you(nb_petals):
  love_you = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    0: "not at all",
  }

  return love_you[nb_petals % 6]


print(how_much_i_love_you(3))
print(how_much_i_love_you(7))
print(how_much_i_love_you(6))