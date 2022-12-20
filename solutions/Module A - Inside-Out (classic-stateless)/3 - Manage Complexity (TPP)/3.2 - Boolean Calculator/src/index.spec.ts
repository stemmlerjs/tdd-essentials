import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {

  describe('single values', () => {
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
  
    it("treats 'false', 'FALSE', 'fAlSe', and 'False' %s as a valid 'false'", () => {
      ['false', 'FALSE', 'fAlSe', "False"].forEach((f) =>
        expect(BooleanCalculator.calculate(f)).toBeFalsy()
      );
    });
  })

  describe('not operator', () => {
    it('knows that "NOT TRUE" equates to false', () => {
      expect(BooleanCalculator.calculate("NOT TRUE")).toBeFalsy();
    })

    it('knows that "NOT FALSE" equates to true', () => {
      expect(BooleanCalculator.calculate("NOT FALSE")).toBeTruthy();
    })
  })
  
});
