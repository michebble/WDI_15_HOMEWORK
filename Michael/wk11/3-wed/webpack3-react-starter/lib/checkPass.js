export default function checkPass(password) {
  const lowerCase = /[a-z]/g
  const specialChar = /\W/g
  const number = /\d/g
  const upperCase = /[A-Z]/g

  let result = new Object()
  lowerCase.test(password) ? result.hasLowerCase = true : null
  specialChar.test(password) ? result.hasSpecialChar = true : null
  number.test(password) ? result.hasNumber = true : null
  upperCase.test(password) ? result.hasUpperCase = true : null
  lengthTest(password)? result.isOver8Char = true : null
  result.score = totalScore(result)
  return result
}

function lengthTest(password) {
  return (password.length >= 8)
}

function totalScore(result) {
  const testValues = Object.values(result)
  return testValues.filter(value => value === true).length
}