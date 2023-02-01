# def solution(string):
#   return string[::-1]

def solution(string):
  rev_str = list(string)
  rev_str.reverse()
  return "".join(rev_str)

print(solution("Hello"))