
type PasswordError = 'InvalidLengthError'

export type CheckedPasswordResponse = {
  result: boolean;
  errors: PasswordError[]
}

export class PasswordChecker {
  public static checkPassword (password: string): CheckedPasswordResponse {
    if (password.length === 5) return { result: true, errors: [] }
    if (password.length === 6) return { result: true, errors: [] }
    if (password.length === 7) return { result: true, errors: [] }
    return {
      result: false,
      errors: ['InvalidLengthError']
    }
  }
}