def well(x):
    ideas = 0
    for idea in x:
      if idea == "good":
        ideas += 1
    if ideas > 2: return "I smell a series!"
    if ideas >= 1 and ideas <= 2: return "Publish!"
    return "Fail!"