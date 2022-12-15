import { game } from "./fizzBuzzWhizz";

describe('FizzBuzzWhizz Game', () => {
  test('should return number as a string', () => {
    const result = game(1);
    expect(result).toBe('1');
  });
  test('should return Fizz if is divisible by 3', () => {
    [6, 9, 12, 18, 21].map((number) => {
      const result = game(number);
      expect(result).toBe('Fizz');
    });
  });
  test('should return Buzz if is divisible by 5', () => {
    [10, 20, 25, 35].map((number) => {
      const result = game(number);
      expect(result).toBe('Buzz');
    });
  });
  test('should return FizzBuzz if is divisible by 3 and 5', () => {
    [15, 30, 75].map((number) => {
      const result = game(number);
      expect(result).toBe('Fizz'.concat('Buzz'));
    });
  });
  test('should return Whizz if the number is prime', () => {
    [2, 7].map((number) => {
      const result = game(number);
      expect(result).toBe('Whizz');
    });
  });
  test('should return FizzWhizz if divisible by 3 and prime', () => {
    const result = game(3);
    expect(result).toBe(('Fizz'.concat('Whizz')));
  });
  test('should return FizzWhizz if divisible by 5 and prime', () => {
    const result = game(5);
    expect(result).toBe(('Buzz'.concat('Whizz')));
  });
});