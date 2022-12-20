import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  it('knows that "true" equates to true', () => {
    expect(BooleanCalculator.calculate("true")).toBeTruthy();
  });

  it('knows that "false" equates to false', () => {
    expect(BooleanCalculator.calculate("false")).toBeFalsy();
  });

  it("treats 'true', 'TRUE', 'trUE', and 'True' %s as a valid 'true'", () => {
    ["true", "TRUE", "trUE", "True"].forEach((t) =>
      expect(BooleanCalculator.calculate(t)).toBeTruthy()
    );
  });
});
