function isPalindrome(x) {
  x.toLowerCase()
  if (x.length < 2) return true

  let [left, right] = [0, x.length - 1]

  while (left < right) {
    if (x.toLowerCase()[left] !== x.toLowerCase()[right]) return false
    left += 1
    right -= 1
  }

  return true
}


console.log(isPalindrome(""))
console.log(isPalindrome("a"))