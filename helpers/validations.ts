export function validateEmail(email: string): boolean {
  // Regular expression pattern for email validation
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  // Match the email pattern against the input email
  const match = email.match(pattern)

  // Return true if the email is valid, false otherwise
  return !!match
}

export function validatePassword(password: string): boolean {
  // Regular expression pattern for password validation
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  // Match the password pattern against the input password
  const match = password.match(pattern)

  // Return true if the password is valid, false otherwise
  return !!match
}
