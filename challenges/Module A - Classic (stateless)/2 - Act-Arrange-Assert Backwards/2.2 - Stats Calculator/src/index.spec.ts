
import { calculateStats } from './index'

describe('stats calculator', () => {

  it('returns "minValue", "maxValue", "numElements", "averageValue"', () => {
    let response = calculateStats([2, 4, 21, -8, 53, 40]);

    expect(response['minValue']).toBeDefined();
    expect(response['maxValue']).toBeDefined();
    expect(response['numElements']).toBeDefined();
    expect(response['averageValue']).toBeDefined();
  });

  it('knows that the minimum value is -8 for the sequence [2, 4, 21, -8, 53, 40]', () => {
    let response = calculateStats([2, 4, 21, -8, 53, 40])
    expect(response.minValue).toEqual(-8);
  });

  it('knows that the minimum value is 1 for the sequence [2, 4, 21, 1, 53, 40]', () => {
    let response = calculateStats([2, 4, 21, 1, 53, 40])
    expect(response.minValue).toEqual(1);
  });

  it('knows that the maxiumum value is 53 for the sequence [2, 4, 21, -8, 53, 40]', () => {
    let response = calculateStats([2, 4, 21, 53, 53, 40])
    expect(response.maxValue).toEqual(53);
  });

  it('knows that the maxiumum value is 222 for the sequence [2, 4, 222, -8, 53, 40]', () => {
    let response = calculateStats([2, 4, 222, 53, 53, 40])
    expect(response.maxValue).toEqual(222);
  });

  it('knows that the numElements is 6 for the sequence [2, 4, 222, -8, 53, 40]', () => {
    let response = calculateStats([2, 4, 222, 53, 53, 40])
    expect(response.numElements).toEqual(6);
  });

  it('knows that the average value is is 18.666666666667 for the sequence [2, 4, 21, -8, 53, 40]', () => {
    let response = calculateStats([2, 4, 21, -8, 53, 40])
    expect(response.averageValue).toBeCloseTo(18.666666666667);
  });
})