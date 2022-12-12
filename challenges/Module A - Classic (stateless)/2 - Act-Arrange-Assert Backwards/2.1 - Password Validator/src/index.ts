
type PasswordError = 'InvalidLengthError'

export type CheckedPasswordResponse = {
  result: boolean;
  errors: PasswordError[]
}

export class PasswordChecker {
  public static checkPassword (password: string): CheckedPasswordResponse {
    if (password.length >= 5 && password.length <= 10) return { result: true, errors: [] };
    return {
      result: false,
      errors: ['InvalidLengthError']
    }
  }
}