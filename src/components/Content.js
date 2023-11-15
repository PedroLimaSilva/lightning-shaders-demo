import Lightning from "@lightningjs/core";
import { Rail } from "./Rail";

const rails = [
  [
    { title: "A", type: "DEFAULT", progress: 0.5 },
    { title: "B", type: "DEFAULT", progress: 0.75 },
    { title: "C", type: "ROUNDED", progress: 0.0 },
    { title: "D", type: "DEFAULT", progress: 0.9 },
    { title: "E", type: "DEFAULT", progress: 0.25 },
  ],
  [
    { title: "F", type: "ROUNDED", progress: 0.5 },
    { title: "G", type: "ROUNDED", progress: 0.75 },
    { title: "H", type: "DEFAULT", progress: 0.1 },
    { title: "I", type: "ROUNDED", progress: 0.9 },
    { title: "J", type: "ROUNDED", progress: 0.25 },
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
