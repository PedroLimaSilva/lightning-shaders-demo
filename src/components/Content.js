import Lightning from "@lightningjs/core";
import { Rail } from "./Rail";

const rails = [
  [
    { title: "A", type: "DEFAULT" },
    { title: "B", type: "DEFAULT" },
    { title: "C", type: "ROUNDED" },
    { title: "D", type: "DEFAULT" },
    { title: "E", type: "DEFAULT" },
  ],
  [
    { title: "F", type: "ROUNDED" },
    { title: "G", type: "ROUNDED" },
    { title: "H", type: "DEFAULT" },
    { title: "I", type: "ROUNDED" },
    { title: "J", type: "ROUNDED" },
  ],
];

export class Content extends Lightning.Component {
  constructor(stage) {
    super(stage);

    this.rect = true;
    this.w = 1066;
    this.h = 550;
    this.y = 50;
    this.color = 0xff1a1a1a;

    this.rails = [];
    this.focusedIndex = 0;

    for (let i = 0; i < rails.length; i++) {
      const el = new Rail(stage);
      el.y = 50 + 200 * i;
      el.setItems(rails[i]);
      this.rails.push(el);

      this.childList.add(el);
    }
  }

  _getFocused() {
    return this.rails[this.focusedIndex];
  }

  _handleUp() {
    this.focusedIndex = Math.max(0, this.focusedIndex - 1);
  }

  _handleDown() {
    this.focusedIndex = Math.min(this.rails.length - 1, this.focusedIndex + 1);
  }
}
