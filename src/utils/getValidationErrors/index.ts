import { ValidationError } from 'yup'

export interface Errors {
  [key: string]: string
}

export const getValidationErrors = (err: ValidationError): Errors => {
  const validationErrors: Errors = {}

  err.inner.forEach((error) => {
    validationErrors[error.path as string] = error.message
  })

  return validationErrors
}
