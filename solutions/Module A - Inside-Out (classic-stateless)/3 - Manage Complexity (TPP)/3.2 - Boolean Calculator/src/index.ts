
export class BooleanCalculator {

  public static calculate (expression: string): boolean {
    let isTrue = expression.toLowerCase() === 'true';
    return isTrue;
  }

}