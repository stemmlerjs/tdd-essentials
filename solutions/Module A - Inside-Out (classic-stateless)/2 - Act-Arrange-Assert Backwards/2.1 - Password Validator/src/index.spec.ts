
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

  it('returns a successful response when a word like "bl8kE" is exactly 5 characters', () => {
    // arrange
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('bl8kE')

    // assert
    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBe(0);
  });

  it('returns a successful response when a word like "Mot3er" is exactly 6 characters', () => {
    // arrange
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('Mot3er')

    // assert
    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBe(0);
  });

  it('returns a successful response when a word like "mo7herS" is exactly 7 characters', () => {
    // arrange
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('mo7herS')

    // assert
    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBe(0);
  });

  it ('returns an error if words like "hello" dont contain at least one digit', () => {
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('hello')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain('MissingDigitError');

  })

  it('returns an error if words like "mo7hers" dont contain at least one uppercase character', () => {
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('mo7hers')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain('NoUppercaseError');
  });

  it('returns a successful response if words like "Mo7hers" contain at least one uppercase character', () => {
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('Mo7hers')

    // assert
    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBeGreaterThanOrEqual(0);
  });

  it('returns multiple errors when there is no uppercase and no number and invalid length like in "ab"', () => {
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('ab')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toEqual(3);
    expect(response.errors).toContain('NoUppercaseError');
    expect(response.errors).toContain('MissingDigitError');
    expect(response.errors).toContain('InvalidLengthError');
  })
})

