
type PasswordError = 'InvalidLengthError'

export type CheckedPasswordResponse = {
  result: boolean;
  errors: PasswordError[]
}

const isLengthBetween = (lower: number, upper: number, text: string) => {
  return text.length >= 5 && text.length <= 10
}

export class PasswordChecker {
  public static checkPassword (password: string): CheckedPasswordResponse {
    if (isLengthBetween(5, 10, password)) return { result: true, errors: [] };
    return {
      result: false,
      errors: ['InvalidLengthError']
    }
  }
}