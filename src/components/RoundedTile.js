import { Tile } from "./Tile";

export class RoundedTile extends Tile {
  _focus() {
    this.color = 0xffff00ff;
  }
}
