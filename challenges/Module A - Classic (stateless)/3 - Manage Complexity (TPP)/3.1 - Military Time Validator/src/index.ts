
export class MilitaryTimeValidator {
  public static validate (text: string): boolean {
    if (text === "") throw new Error('Empty string');
    return true;
  }
}