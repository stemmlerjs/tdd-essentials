
import { Slot } from ".";

export class Grid {
  private state: Slot[][];
  private slotsLeft: number = 9;

  constructor () {
    this.state = [...Array<Slot>(3)].map(e => Array<Slot>(3).fill(''));
  }

  setSlot (x: number, y: number, value: Slot) {
    this.state[x][y] = value;
    this.slotsLeft--;
  }

  getSlotAt (x: number, y: number): Slot {
    return this.state[x][y];
  }

  getSlotsLeft(): number {
    return this.slotsLeft;
  }
}