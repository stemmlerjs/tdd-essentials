
import { TicTacToe } from './index'

describe('tic tac toe', () => {

  let game: TicTacToe;

  beforeEach(() => {
    game = new TicTacToe();
  })

  it("should be player 1's turn when the game starts", () => {
    expect(game.getTurn()).toEqual('playerOne')
  });

  it("should be player 2's turn after player 1 moves", () => {
    game.move('topLeft');

    expect(game.getTurn()).toEqual('playerTwo')
  });

  it("should alternate between player 1 and 2", () => {
    game.move('topLeft');
    expect(game.getTurn()).toEqual('playerTwo');

    game.move('topRight');
    expect(game.getTurn()).toEqual('playerOne');

    game.move('topMiddle');
    expect(game.getTurn()).toEqual('playerTwo');
  });

  it("knows that the game is a draw when all of the slots have been filled", () => {
    game.move('topLeft');
    game.move('topMiddle');
    game.move('topRight');
    game.move('middleLeft');
    game.move('middle');
    game.move('middleRight');
    game.move('bottomLeft');
    game.move('bottomMiddle');
    game.move('bottomRight');

    expect(game.isOver()).toBeTruthy();
  });

  it("knows that the game is not a draw when there are still slots left", () => {
    game.move('topLeft');
    expect(game.isOver()).toBeFalsy();
    expect(game.getResult()).toEqual('draw')
  });

  it ("knows when player 1 won the game by playing all of the bottom slots", () => {
    game.move('bottomLeft');
    game.move('middle');
    game.move('bottomMiddle');
    game.move('middleLeft');
    game.move('bottomRight');
    expect(game.isOver()).toBeTruthy();
    expect(game.getResult()).toEqual('playerOneWon')
  })


})

