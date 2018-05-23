export default function getStrength(password) {
  var output = 0
  if (password.length >= 8) {
    output += 1
  } 
  
  return output
  
}




  

const uppercase = /[A-Z]/g
const lowercase = /[a-z]/g
const symbols = /\W/g
const number = /\d/g
 