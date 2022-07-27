const isPalindrome = require('../services/isPalindrome')

const getReverseText = async (req, res) => {
  try {
    const text = req.query.text
    // check if text is an empty text string
    if (text === '' || text === undefined) {
      return res.status(400).json({ error: 'no text' })
    }

    const reversedText = text.split('').reverse().join('')
    res.status(200).send({ text: reversedText, palindrome: isPalindrome(text) })
  } catch (err) {
    console.error(err)
    res.status(400).send({ error: err })
  }
}

module.exports = getReverseText
