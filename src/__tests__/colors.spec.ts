import { getColorName } from '../utils/utils';

describe('GetColorName', () => {
  it('should return the expected color name', () => {
    // expect(getColorName(`#${hex}`)).toBe('Black');
    expect(getColorName('000000')).toBe('Black');
  });

  xit('should return the expected color name for hex code with 3 characters', () => {
    expect(getColorName(`#000`)).toBe('Black');
  });

  //   xit.each(['invalid', ''])(
  //     'should return the invalid color message for invalid arguments',
  //     (hexCode) => {
  //       expect(getColorName(hexCode)).toBe(`Invalid Color: ${hexCode}`);
  //     }
  //   );
});
