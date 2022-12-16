
import { TicTacToe } from './index'

describe('tic tac toe', () => {

  it("should be player 1's turn when the game starts", () => {
    let game: TicTacToe;

    game = new TicTacToe();

    expect(game.getTurn()).toEqual('playerOne')
  });

  it("should be player 2's turn after player one moves", () => {
    let game: TicTacToe;

    game = new TicTacToe();

    game.move('topLeft');

    expect(game.getTurn()).toEqual('playerTwo')
  })

})

