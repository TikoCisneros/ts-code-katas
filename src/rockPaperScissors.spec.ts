import { game } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('should get a draw if both players choose rock', () => {
    const playerOneMove = 'Rock';
    const playerTwoMove = 'Rock';
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe('Is a draw');
  });
  test('should get "player one wins" if players select rock and scissors', () => {
    const playerOneMove = 'Rock';
    const playerTwoMove = 'Scissors';
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe('Player one wins');
  });
  test('should get "player two wins" if players select rock and paper', () => {
    const playerOneMove = 'Rock';
    const playerTwoMove = 'Paper';
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe('Player two wins');
  });
  test('should get a draw if both players choose paper', () => {
    const playerOneMove = 'Paper';
    const playerTwoMove = 'Paper';
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe('Is a draw');
  });
  test('should get "player one wins" if players select paper and rock', () => {
    const playerOneMove = 'Paper';
    const playerTwoMove = 'Rock';
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe('Player one wins');
  });
  test('should get "player two wins" if players select paper and scissors', () => {
    const playerOneMove = 'Paper';
    const playerTwoMove = 'Scissors';
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe('Player two wins');
  });
  test('should get a draw if both players choose scissors', () => {
    const playerOneMove = 'Scissors';
    const playerTwoMove = 'Scissors';
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe('Is a draw');
  });
  test('should get "player one wins" if players select scissors and paper', () => {
    const playerOneMove = 'Scissors';
    const playerTwoMove = 'Paper';
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe('Player one wins');
  });
  test('should get "player two wins" if players select scissors and rock', () => {
    const playerOneMove = 'Scissors';
    const playerTwoMove = 'Rock';
    const result = game(playerOneMove, playerTwoMove);
    expect(result).toBe('Player two wins');
  });
});
