
import { MilitaryTimeValidator } from './index'

describe('military time validator', () => {

  it('knows that an empty string is not a valid time', () => {
    expect(MilitaryTimeValidator.validate("")).toBeFalsy();
  });

  it('knows that "010011:00" is not a valid military time', () => {
    expect(MilitaryTimeValidator.validate("010011:00")).toBeFalsy();
  })

  it('knows that "0100- 1:00" is not a valid military time', () => {
    expect(MilitaryTimeValidator.validate("0100- 1:00")).toBeFalsy();
  })

  it('knows that "01:00 - 0100" is not a valid military time', () => {
    expect(MilitaryTimeValidator.validate("01:00 - 0100")).toBeFalsy();
  })

  it('knows that "0100 - 11:00" is not a valid military time', () => {
    expect(MilitaryTimeValidator.validate("0100 - 11:00")).toBeFalsy();
  })

  it('knows that "01:00 - 11:00" is a valid military time', () => {
    expect(MilitaryTimeValidator.validate("01:00 - 11:00")).toBeTruthy();
  })

  it('knows that "20:00 - 11:00" is not valid military time', () => {
    expect(MilitaryTimeValidator.validate("20:00 - 11:00")).toBeFalsy();
  })

  // ... Continue
})
