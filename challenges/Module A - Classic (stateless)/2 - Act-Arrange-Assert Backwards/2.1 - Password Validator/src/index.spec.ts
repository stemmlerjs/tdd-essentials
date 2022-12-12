
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
    expect(response.errors[0]).toEqual('InvalidLengthError');
  });

  it('returns an invalid length error when strings like "billnyethescienceguyhustlegangwhatsgood" are longer than 10 characters', () => {
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('billnyethescienceguyhustlegangwhatsgood')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors[0]).toEqual('InvalidLengthError');
  });

  it('returns a successful response when a word like "bloke" is exactly 5 characters', () => {
    // arrange
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('bloke')

    // assert
    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBe(0);
  });

  it('returns a successful response when a word like "mother" is exactly 6 characters', () => {
    // arrange
    let response: CheckedPasswordResponse;

    // act
    response = PasswordChecker.checkPassword('mother')

    // assert
    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBe(0);
  });
  
})

