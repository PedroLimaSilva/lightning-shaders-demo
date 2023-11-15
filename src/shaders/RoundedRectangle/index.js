import Lightning from "@lightningjs/core";

import fragmentShader from "./fragment.glsl";

export class RoundedRectangleShader extends Lightning.shaders
  .WebGLDefaultShader {
  constructor(context) {
    super(context);
    this._radius = 0;
    this._progress = 0;
  }

  set radius(v) {
    this._radius = v;
    this.redraw();
  }

  set progress(v) {
    this._progress = v;
    this.redraw();
  }

  setupUniforms(operation) {
    super.setupUniforms(operation);
    const owner = operation.shaderOwner;

    const renderPrecision = this.ctx.stage.getRenderPrecision();
    this._setUniform(
      "resolution",
      new Float32Array([
        owner._w * renderPrecision,
        owner._h * renderPrecision,
      ]),
      this.gl.uniform2fv,
    );

    this._setUniform(
      "radius",
      this._radius * renderPrecision,
      this.gl.uniform1f,
    );

    this._setUniform(
      "progress",
      this._progress * renderPrecision,
      this.gl.uniform1f,
    );
  }
}

RoundedRectangleShader.fragmentShaderSource = fragmentShader;
