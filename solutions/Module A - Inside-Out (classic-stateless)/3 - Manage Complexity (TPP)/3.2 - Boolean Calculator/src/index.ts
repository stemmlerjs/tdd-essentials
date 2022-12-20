
const isAndExpression = (parts: string[]) => parts[1].toLocaleLowerCase() === 'and';
const isNotExpression = (parts: string[]) => parts[0].toLowerCase() === 'not';
const isTrue = (expression: string) => expression.toLowerCase() === 'true'

export class BooleanCalculator {

  public static calculate (expression: string): boolean {
    let parts = expression.split(" ");
    if (parts.length === 1) return isTrue(expression);
    if (isNotExpression(parts)) return !isTrue(parts[1]);
    if (isAndExpression(parts)) return parts[0].toLowerCase() === parts[2].toLowerCase()
    return true
  }

}