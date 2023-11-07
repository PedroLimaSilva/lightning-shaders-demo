import Lightning from "@lightningjs/core";
import { Topnav } from "./components/Topnav";
import { Content } from "./components/Content";

export default class App extends Lightning.Component {
  constructor(stage) {
    super(stage);

    // 0 -> Topnav  focused
    // 1 -> Content focused
    this.focusedIndex = 0;

    const topNav = (this.topNav = new Topnav(stage));
    const content = (this.content = new Content(stage));

    this.childList.add(topNav);
    this.childList.add(content);
  }

  _getFocused() {
    // should focus topnav or content
    return this.focusedIndex === 1 ? this.content : this.topNav;
  }

  _handleUp() {
    // should change focus to topnav
    this.focusedIndex = 0;
  }

  _handleDown() {
    // should change focus to content
    this.focusedIndex = 1;
  }

  _handleEnter() {
    // should change focus to content
    this.focusedIndex = 1;
  }
}
