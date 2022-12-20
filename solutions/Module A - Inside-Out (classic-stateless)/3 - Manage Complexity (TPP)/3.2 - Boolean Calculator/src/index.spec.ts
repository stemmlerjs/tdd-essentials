
import { BooleanCalculator } from './index'

describe('boolean calculator', () => {

  it('knows that "true" equates to true', () => {
    expect(BooleanCalculator.calculate('true')).toBeTruthy();
  })

  it('knows that "false" equates to false', () => {
    expect(BooleanCalculator.calculate('false')).toBeFalsy();
  })

  // it("can handle upper, mixed, and lowercase versions of 'true'", () => {

  // })

  // it("can handle upper, mixed, and lowercase versions of 'false'", () => {

  // });

})
