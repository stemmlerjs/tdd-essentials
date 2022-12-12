
export class PasswordChecker {

  public static checkPassword (password: string) {
    return {
      result: false,
      errors: ['InvalidLengthError']
    }
  }
}