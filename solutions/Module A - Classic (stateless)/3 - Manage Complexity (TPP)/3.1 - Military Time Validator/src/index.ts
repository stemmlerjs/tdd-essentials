
const leftSide = (text: string) => text.split(' - ')[0];
const rightSide = (text: string) => text.split(' - ')[1];
const hour = (text: string) => text.split(":")[0];

export class MilitaryTimeValidator {
  public static validate (text: string): boolean {
    if (text === "") return false;
    if (text.indexOf(" - ") === -1) return false;
    if (leftSide(text).indexOf(':') === -1) return false; 
    if (rightSide(text).indexOf(':') === -1) return false; 
    if (hour(leftSide(text)) > hour(rightSide(text))) return false;
  
    return true;
  }
}

