
import { TicTacToe } from './index'

describe('tic tac toe', () => {

  it("should be player 1's turn when the game starts", () => {
    let game: TicTacToe;

    game = new TicTacToe();

    expect(game.getTurn()).toEqual('playerOne')
  });

  it("should be player 2's turn after player 1 moves", () => {
    let game: TicTacToe;

    game = new TicTacToe();

    game.move('topLeft');

    expect(game.getTurn()).toEqual('playerTwo')
  });

  it("should alternate between player 1 and 2", () => {
    let game: TicTacToe;

    game = new TicTacToe();

    game.move('topLeft');
    expect(game.getTurn()).toEqual('playerTwo');

    game.move('topRight');
    expect(game.getTurn()).toEqual('playerOne');

    game.move('topMiddle');
    expect(game.getTurn()).toEqual('playerTwo');
  })

})

