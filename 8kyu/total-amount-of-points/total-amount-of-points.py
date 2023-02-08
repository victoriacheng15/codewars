def points(games):
  arr = list(map(lambda game: game.split(":"), games))
  result = 0
  for points in arr:
    if points[0] > points[1]:
      result += 3
    if points[0] == points[1]:
      result += 1
  return result


print(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))