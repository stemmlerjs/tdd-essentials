
type PasswordError = 'InvalidLengthError' | 'MissingDigitError' | 'NoUppercaseError'

export type CheckedPasswordResponse = {
  result: boolean;
  errors: PasswordError[]
}

const isLengthBetween = (lower: number, upper: number, text: string) => {
  return text.length >= lower && text.length <= upper
}

const hasDigits = (text: string) => {
  return text.split("").find((char: any) => !isNaN(char));
}

const hasUppercase = (text: string) => {
  return text.split("")
    .filter((char: any) => isNaN(char))
    .find((char: string) => char === char.toUpperCase());
}

export class PasswordChecker {
  public static checkPassword (password: string): CheckedPasswordResponse {
    let errors: PasswordError[] = [];
    if (!isLengthBetween(5, 10, password)) errors.push('InvalidLengthError');
    if (!hasDigits(password)) errors.push('MissingDigitError');
    if (!hasUppercase(password)) errors.push('NoUppercaseError');
    return {
      result: errors.length === 0,
      errors
    }
  }
}