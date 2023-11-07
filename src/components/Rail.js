import Lightning from "@lightningjs/core";
import { Tile } from "./Tile";
import { RoundedTile } from "./RoundedTile";

export class Rail extends Lightning.Component {
  constructor(stage) {
    super(stage);
    this.focusedIndex = 0;
    this.tiles = [];
  }
  setItems(items) {
    for (let i = 0; i < items.length; i++) {
      const tile = i % 2 ? new RoundedTile(this.stage) : new Tile(this.stage);
      tile.setItem(items[i]);
      tile.x = 20 + (20 + tile.w) * i;
      this.tiles.push(tile);
      this.childList.add(tile);
    }
  }

  _getFocused() {
    // should focus correct tile
    return this.tiles[this.focusedIndex];
  }

  _handleLeft() {
    if (this.focusedIndex > 0) {
      this.focusedIndex--;
    }
    return false;
  }

  _handleRight() {
    if (this.focusedIndex < this.tiles.length - 1) {
      this.focusedIndex++;
    }
    return false;
  }
}
