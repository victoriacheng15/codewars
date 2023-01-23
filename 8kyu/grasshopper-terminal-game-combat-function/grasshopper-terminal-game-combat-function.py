def combat(health: int, damage: int) -> int:
  res = health - damage
  return 0 if res < 0 else res