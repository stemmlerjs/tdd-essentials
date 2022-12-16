
type Player = 'playerOne' | 'playerTwo'

type Position = 'topLeft' | 'topRight' | 'topMiddle' |
  'middleLeft' | 'middle' | 'middleRight' | 'bottomLeft' |
  'bottomMiddle' | 'bottomRight';

type Slot = 'x' | 'o' | ''

type GameResult = 'draw' | 'playerOneWon'

export class TicTacToe {

  private turn: Player;
  private grid: Slot[][];
  private slotsLeft: number = 9;

  constructor () {
    this.turn = 'playerOne';
    this.grid = [...Array<Slot>(3)].map(e => Array<Slot>(3).fill(''));
  }

  getTurn (): Player {
    return this.turn;
  }

  private getSlotCoordinateFromPosition (position: Position): [number, number] {
    switch (position) {
      case 'topLeft':
        return [0, 0];
      case 'topRight':
        return [0, 1];
      case 'topMiddle':
        return [0, 2];
      case 'middleLeft':
        return [1, 0];
      case 'middle':
        return [1, 1];
      case 'middleRight':
        return [1, 2];
      case 'bottomLeft':
        return [2, 0];
      case 'bottomMiddle':
        return [2, 1];
      case 'bottomRight':
        return [2, 2];
      default:
        throw new Error('Invalid position')  
    }
  }

  move (position: Position): void {
    this.turn = this.turn === 'playerOne' ? 'playerTwo' : 'playerOne';

    let [x, y] = this.getSlotCoordinateFromPosition(position)
    this.grid[x][y] = this.turn === 'playerTwo' ? 'x' : 'o';
    this.slotsLeft--;
  }

  private isGameOverForVictoryReason () {
    console.log(this.grid)
    return this.grid[2][0] === 'x' && this.grid[2][1] === 'x' && this.grid[2][2] === 'x';
  }

  private isGameGraw () {
    return this.slotsLeft === 0 
  }

  isOver () {
    return this.isGameGraw() || this.isGameOverForVictoryReason();
  }

  getResult (): GameResult {
    if (this.isGameOverForVictoryReason()) {
      return 'playerOneWon'
    }

    return 'draw';
  }

}