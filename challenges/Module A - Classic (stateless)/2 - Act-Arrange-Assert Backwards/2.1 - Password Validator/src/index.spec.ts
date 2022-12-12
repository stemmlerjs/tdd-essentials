
import { PasswordChecker, CheckedPasswordResponse } from './index'

describe('password validator', () => {
  it ('returns an invalid length error when strings like "mom" are less than 5 characters', () => {
    // arrange
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('mom')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain('InvalidLengthError');
  });

  it('returns an invalid length error when strings like "billnyethescienceguyhustlegangwhatsgood" are longer than 10 characters', () => {
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('billnyethescienceguyhustlegangwhatsgood')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain('InvalidLengthError');
  });

  it('returns a successful response when a word like "bl8ke" is exactly 5 characters', () => {
    // arrange
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('bl8ke')

    // assert
    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBe(0);
  });

  it('returns a successful response when a word like "mot3er" is exactly 6 characters', () => {
    // arrange
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('mot3er')

    // assert
    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBe(0);
  });

  it('returns a successful response when a word like "mo7hers" is exactly 7 characters', () => {
    // arrange
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('mo7hers')

    // assert
    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBe(0);
  });

  it ('returns an error if passwords dont contain at least one digit', () => {
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('hello')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain('MissingDigitError');

  })
  
  
})

