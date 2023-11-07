import { Tile } from "./Tile";
import { RoundedRectangleShader } from "../shaders/RoundedRectangleShader";

export class RoundedTile extends Tile {
  constructor(stage) {
    super(stage);
    this.shader = stage.renderer.createShader(stage.ctx, {
      type: RoundedRectangleShader
    });
    this.shader.radius = 10;
  }

  _focus() {
    this.color = 0xffff00ff;
  }
}
