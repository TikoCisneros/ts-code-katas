import { sumOfIntegersInString } from "./sumIntInString";

describe('Sum Integers in String code kata', () => {
  test('should return 0 if there are no numbers in the string ', () => {
    const value = 'Hello world!';
    const expectedResult = 0;
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should return 16 if the string is 1abc15', () => {
    const value = '1abc15';
    const expectedResult = 16;
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should return 100 if the string is The30quick20brown1f0x19jumps10ov3r7the6l4zy', () => {
    const value = 'The30quick20brown1f0x19jumps10ov3r7the6l4zy';
    const expectedResult = 100;
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should return 0 if the string is empty', () => {
    const value = '';
    const expectedResult = 0;
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should return 0 if the string is only an empty space', () => {
    const value = ' ';
    const expectedResult = 0;
    const resp = sumOfIntegersInString(value);
    expect(resp).toEqual(expectedResult);
  });
});
