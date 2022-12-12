
type PasswordError = 'InvalidLengthError'

export type CheckedPasswordResponse = {
  result: boolean;
  errors: PasswordError[]
}

export class PasswordChecker {
  public static checkPassword (password: string): CheckedPasswordResponse {
    return {
      result: false,
      errors: ['InvalidLengthError']
    }
  }
}