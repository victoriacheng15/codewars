class Ghost(object):
  def __init__(self):
    from random import randrange
    colors = ['white', 'yellow', 'purple', 'red']
    self.color = colors[randrange(0, len(colors))]


res = Ghost()
print(res.color)