// Function to check string palindrome
function checkPalindrome (str) {
  let flag = true

  const n = str.length

  str = str.toLowerCase()

  let low = 0

  let high = n - 1

  while (high > low) {
    if (str[high] !== str[low]) {
      flag = false
      break
    }

    low++

    high--
  }

  return flag
}

module.exports = checkPalindrome
