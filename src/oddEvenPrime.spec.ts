import { getOddEvenPrime } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('should return "Odd" if the number is 1', () => {
    const value = 1;
    const expectedResult = 'Odd';
    const resp = getOddEvenPrime(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should return "Odd" if the number is 9', () => {
    const value = 9;
    const expectedResult = 'Odd';
    const resp = getOddEvenPrime(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should return "Even" if the number is 4', () => {
    const value = 4;
    const expectedResult = 'Even';
    const resp = getOddEvenPrime(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should return "Even" if the number is 14', () => {
    const value = 14;
    const expectedResult = 'Even';
    const resp = getOddEvenPrime(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should return "2" if the number is 2', () => {
    const value = 2;
    const expectedResult = '2';
    const resp = getOddEvenPrime(value);
    expect(resp).toEqual(expectedResult);
  });
  test('should return "7" if the number is 7', () => {
    const value = 7;
    const expectedResult = '7';
    const resp = getOddEvenPrime(value);
    expect(resp).toEqual(expectedResult);
  });
});
