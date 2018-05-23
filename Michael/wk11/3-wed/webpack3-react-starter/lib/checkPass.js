export default function checkPass(password) {
  const lowercase = /[a-z]/g
  let result = new Object()
  result.hasLowerCase = lowercase.test(password) ? true : false
  result.score = totalScore(result)
  
  return result
}

function totalScore(result) {
  const testValues = Object.values(result)
  return testValues.filter(value => value === true).length
}