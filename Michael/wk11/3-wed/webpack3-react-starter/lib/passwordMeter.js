export default function getStrength(password) {
  const uppercase = /[A-Z]/g
  const lowercase = /[a-z]/g
  const symbols = /\W/g
  const number = /\d/g
  let output = 0
  if (password.length >= 8) {
    output += 1
  } 
  if (lowercase.test(password)) {
    output += 1
  }
  if (uppercase.test(password)) {
    output += 1
  }
  if (number.test(password)) {
    output += 1
  }
  if (symbols.test(password)) {
    output += 1
  }
  return output
}




  


 