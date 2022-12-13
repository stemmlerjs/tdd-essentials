
import { MilitaryTimeValidator } from './index'

describe('military time validator', () => {

  it('throw an error when an empty string is provided', () => {
    expect(() => MilitaryTimeValidator.validate("")).toThrow();
  })
})
