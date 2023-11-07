import Lightning from "@lightningjs/core";
import App from "./App";

export const VIEWPORT_WIDTH = 1066;
export const VIEWPORT_HEIGHT = 600;

const settings = {
  stage: {
    w: VIEWPORT_WIDTH,
    h: VIEWPORT_HEIGHT,
    clearColor: 0x00000000,
    precision: 1,
    canvas2d: false
  },
  debug: false,
  keys: {
    8: "Back",
    13: "Enter",
    27: "Menu",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    174: "ChannelDown",
    175: "ChannelUp",
    178: "Stop",
    250: "PlayPause",
    191: "Search", // Use "/" for keyboard
    409: "Search"
  }
};

class Application extends Lightning.Application {
  constructor(options) {
    super(options);
    this.config = options;
  }

  static _template() {
    return {
      w: VIEWPORT_WIDTH,
      h: VIEWPORT_HEIGHT,
      rect: true,
      color: 0xff000000,
      App: {
        type: App
      }
    };
  }

  _getFocused() {
    return this.tag("App");
  }
}

const app = new Application(settings);
document.body.appendChild(app.stage.getCanvas());
