import * as Email from "email-validator"

export const validate = values => {
  const errors = {}
  if (values.hasOwnProperty("email") && !Email.validate(values.email)) {
    errors.email = "Invalid Email"
  }
  if (values.hasOwnProperty("password") && values.password.length < 8) {
    errors.password = "Password should be at least 8 characters"
  }
  if (values.hasOwnProperty("search") && values.search.length < 3) {
    errors.search = "should be more than 3 characters!"
  }
  return errors
}
