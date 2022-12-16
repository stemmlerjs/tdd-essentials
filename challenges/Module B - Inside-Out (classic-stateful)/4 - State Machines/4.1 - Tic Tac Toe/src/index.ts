
type Player = 'playerOne' | 'playerTwo'

type Position = 'topLeft'

export class TicTacToe {

  private turn: Player;

  constructor () {
    this.turn = 'playerOne';
  }

  getTurn (): Player {
    return this.turn;
  }

  move (position: Position): void {
    if (this.turn === 'playerOne') {
      this.turn = 'playerTwo'
    }
  }

}