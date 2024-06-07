const validator = require('validator')

// Check whether given email is valid or not
let email = 'test@gmail.com'
console.log(validator.isEmail(email)) // true
email = 'test@'
console.log(validator.isEmail(email)) // false

// Check whether string is in lowercase or not
let name = 'geeksforgeeks'
console.log(validator.isLowercase(name)) // true
name = 'GEEKSFORGEEKS'
console.log(validator.isLowercase(name)) // false

// Check whether string is empty or not
let cname = ''
console.log(validator.isEmpty(cname)) // true
cname = 'geeksforgeeks'
console.log(validator.isEmpty(cname)) // false

// Other functions also available in 
// this module like isBoolean()
// isCurrency(), isDecimal(), isJSON(),
// isJWT(), isFloat(), isCreditCard(), etc.
