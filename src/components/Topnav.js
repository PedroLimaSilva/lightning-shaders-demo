import Lightning from "@lightningjs/core";
import { VIEWPORT_WIDTH } from "..";

const elements = ["ONE", "TWO", "THREE", "FOUR"];

export class Topnav extends Lightning.Component {
  constructor(stage) {
    super(stage);

    this.rect = true;
    this.color = 0x11ffffff;
    this.w = VIEWPORT_WIDTH;
    this.h = 50;

    this.focusedIndex = 0;
    this.elements = [];

    for (let i = 0; i < elements.length; i++) {
      const el = new Lightning.Element(stage);
      const txt = new Lightning.textures.TextTexture(stage);
      el.x = 50 + 200 * i;

      txt.text = elements[i];

      if (i === this.focusedIndex) {
        el.color = 0xff00ff00;
      } else {
        el.color = 0xffffffff;
      }
      el.texture = txt;

      this.elements.push(el);
      this.childList.add(el);
    }
  }

  _focus() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].alpha = 1;
    }
  }

  _unfocus() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].alpha = 0.3;
    }
  }

  _handleLeft() {
    this.elements[this.focusedIndex].color = 0xffffffff;
    this.focusedIndex = Math.max(0, this.focusedIndex - 1);
    this.elements[this.focusedIndex].color = 0xff00ff00;
  }

  _handleRight() {
    this.elements[this.focusedIndex].color = 0xffffffff;
    this.focusedIndex = Math.min(
      this.elements.length - 1,
      this.focusedIndex + 1
    );
    this.elements[this.focusedIndex].color = 0xff00ff00;
  }
}
