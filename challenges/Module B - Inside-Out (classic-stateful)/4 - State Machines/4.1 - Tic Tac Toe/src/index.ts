import { Grid } from "./grid";

type Player = "playerOne" | "playerTwo";

type Position =
  | "topLeft"
  | "topRight"
  | "topMiddle"
  | "middleLeft"
  | "middle"
  | "middleRight"
  | "bottomLeft"
  | "bottomMiddle"
  | "bottomRight";

export type Slot = "x" | "o" | "";

type VictoryType = "playerOneWon" | "playerTwoWon";

type GameResult = "draw" | VictoryType;

/**
 * @Stereotype Controller
 */

export class TicTacToe {
  private turn: Player;
  private grid: Grid;

  constructor() {
    this.turn = "playerOne";
    this.grid = new Grid();
  }

  getTurn(): Player {
    return this.turn;
  }

  private getSlotCoordinateFromPosition(position: Position): [number, number] {
    switch (position) {
      case "topLeft":
        return [0, 0];
      case "topRight":
        return [0, 1];
      case "topMiddle":
        return [0, 2];
      case "middleLeft":
        return [1, 0];
      case "middle":
        return [1, 1];
      case "middleRight":
        return [1, 2];
      case "bottomLeft":
        return [2, 0];
      case "bottomMiddle":
        return [2, 1];
      case "bottomRight":
        return [2, 2];
      default:
        throw new Error("Invalid position");
    }
  }

  move(position: Position): void {
    this.turn = this.turn === "playerOne" ? "playerTwo" : "playerOne";

    let [x, y] = this.getSlotCoordinateFromPosition(position);
    this.grid.setSlot(x, y, this.turn === "playerTwo" ? "x" : "o");
  }

  private isGameOverForVictoryReason() {
    // Bottom row
    return (
      this.grid.getSlotAt(2, 0) !== "" &&
      this.grid.getSlotAt(2, 1) !== "" &&
      this.grid.getSlotAt(2, 2) !== ""
    );
  }

  private getVictoryResult(): { player: VictoryType } {
    // checking bottom row
    let winningPlayer =
      this.grid.getSlotAt(2, 0) === "x" ? "playerOne" : "playerTwo";

    return {
      player: winningPlayer === "playerOne" ? "playerOneWon" : "playerTwoWon",
    };
  }

  private isGameGraw() {
    return this.grid.getSlotsLeft() === 0;
  }

  isOver() {
    return this.isGameGraw() || this.isGameOverForVictoryReason();
  }

  getResult(): GameResult {
    if (this.isGameOverForVictoryReason()) {
      let victoryResult = this.getVictoryResult();
      return victoryResult.player;
    }

    return "draw";
  }
}
