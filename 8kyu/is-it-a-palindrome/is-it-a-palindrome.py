def is_palindrome(s):
  if len(s) < 2: return True
  left, right = 0, len(s) - 1
  while left < right:
    if s.lower()[left] != s.lower()[right]:
      return False
    left += 1
    right -= 1
  return True
