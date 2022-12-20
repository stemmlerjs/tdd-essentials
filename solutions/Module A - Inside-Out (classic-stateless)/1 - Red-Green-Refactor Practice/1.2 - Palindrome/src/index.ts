
function withoutSpaces(str: string): string {
  return str.indexOf(" ") === -1 ? str : withoutSpaces(str.replace(" ", ""));
}

export class PalindromeChecker {
  isAPalindrome(input: string): boolean {
    const reversed = input.split("").reverse().join("");

    return (
      withoutSpaces(reversed.toLowerCase()) ===
      withoutSpaces(input.toLowerCase())
    );
  }
}
