export default function getStrength(password) {
  const uppercase = /[A-Z]/g
  const lowercase = /[a-z]/g
  const symbols = /\W/g
  const number = /\d/g
  let output = 0
  output += length_test(password) ? 1 : 0
  output += lowercase.test(password) ? 1 : 0
  output += uppercase.test(password) ? 1 : 0
  output += number.test(password) ? 1 : 0
  output += symbols.test(password) ? 1 : 0
  return output
}




  
function length_test(password) {
  return (password.length >= 8)
}

 