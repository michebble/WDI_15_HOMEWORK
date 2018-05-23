export default function checkPass(password) {
  const lowerCase = /[a-z]/g
  const specialChar = /\W/g
  let result = new Object()
  lowerCase.test(password) ? result.hasLowerCase = true : null
  specialChar.test(password) ? result.hasSpecialChar = true : null
  result.score = totalScore(result)
  return result
}

function totalScore(result) {
  const testValues = Object.values(result)
  return testValues.filter(value => value === true).length
}