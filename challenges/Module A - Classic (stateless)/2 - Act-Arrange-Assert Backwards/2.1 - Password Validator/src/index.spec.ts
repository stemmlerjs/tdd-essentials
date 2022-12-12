
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

    response = PasswordChecker.checkPassword('billnyethescienceguyhustlegangwhatsgood')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors[0]).toEqual('InvalidLengthError');
  });

  
})

