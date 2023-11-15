import { Tile } from "./Tile";
import { RoundedRectangleShader } from "../shaders/RoundedRectangle";

export class RoundedTile extends Tile {
  constructor(stage) {
    super(stage);
    this.shader = stage.renderer.createShader(stage.ctx, {
      type: RoundedRectangleShader,
    });
    this.shader.radius = 10;
  }

  setItem(item) {
    super.setItem(item);
    this.shader.progress = item.progress;
  }

  _focus() {
    this.color = 0xffff00ff;
    this.setSmooth("scale", 1.05);
  }

  _unfocus() {
    super._unfocus();
    this.setSmooth("scale", 1);
  }
}
