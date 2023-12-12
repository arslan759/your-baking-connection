export function validateEmail(email: string): boolean {
  // Regular expression pattern for email validation
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  // Match the email pattern against the input email
  const match = email.match(pattern)
  // console.log("inside validation",match)
  // Return true if the email is valid, false otherwise
  return !!match
}

export function validatePhone(phone: string): boolean {
  // Regular expression pattern for phone validation
  const pattern = /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/

  // Match the phone pattern against the input email
  const match = phone.match(pattern)
console.log("inside validation",match)
  // Return true if the phone is valid, false otherwise
  return !!match
}

export function checkPassword(password: string, confirmPassword: string): boolean {
  return password === confirmPassword
}
