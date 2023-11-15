import Lightning from "@lightningjs/core";
import { RoundedTile } from "./RoundedTile";
import { Tile } from "./Tile";

const TILE_TYPE_MAP = {
  DEFAULT: Tile,
  ROUNDED: RoundedTile,
};

export class Rail extends Lightning.Component {
  constructor(stage) {
    super(stage);
    this.focusedIndex = 0;
    this.tiles = [];
  }
  setItems(items) {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const tile = new TILE_TYPE_MAP[item.type](this.stage);
      tile.setItem(item.title);
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
