
import { calculateStats } from './index'

describe('stats calculator', () => {

  it('returns "minValue", "maxValue", "numElements", "averageValue"', () => {
    let response = calculateStats([2, 4, 21, -8, 53, 40]);

    expect(response['minValue']).toBeDefined();
    expect(response['maxValue']).toBeDefined();
    expect(response['numElements']).toBeDefined();
    expect(response['averageValue']).toBeDefined();
  })
  
})