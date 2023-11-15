import Lightning from "@lightningjs/core";

const WIDTH = 16 * 11;
const HEIGHT = 9 * 11;

export class Tile extends Lightning.Component {
  setItem(item) {
    this.w = WIDTH;
    this.h = HEIGHT;
    this.rect = true;
    this.color = 0xffffffff;
    this.texture = new Lightning.textures.ImageTexture(this.stage);
    this.texture.src = `https://picsum.photos/seed/${item.title}/${WIDTH}/${HEIGHT}`;

    const label = new Lightning.Element(this.stage);
    const txt = new Lightning.textures.TextTexture(this.stage);
    txt.text = item.title;

    label.texture = txt;
    // this.childList.add(label);
  }

  _focus() {
    this.color = 0xff00ff00;
  }

  _unfocus() {
    this.color = 0xffffffff;
  }
}
