
type Player = 'playerOne' | 'playerTwo'

type Position = 'topLeft' | 'topRight' | 'topMiddle'

export class TicTacToe {

  private turn: Player;

  constructor () {
    this.turn = 'playerOne';
  }

  getTurn (): Player {
    return this.turn;
  }

  move (position: Position): void {
    this.turn = this.turn === 'playerOne' ? 'playerTwo' : 'playerOne';
  }

}