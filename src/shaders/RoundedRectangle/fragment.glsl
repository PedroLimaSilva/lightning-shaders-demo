#ifdef GL_ES
precision lowp float;
#endif

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform vec2 resolution;

void main() {
  vec4 colorFromImage = texture2D(uSampler, vTextureCoord); 

  gl_FragColor = colorFromImage * vColor;
}
