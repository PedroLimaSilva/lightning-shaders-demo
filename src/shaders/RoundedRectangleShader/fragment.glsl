#ifdef GL_ES
precision lowp float;
#endif

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform vec2 resolution;
uniform float radius;

float boxDistP(vec2 coord){
  vec2 d = (abs(coord - 0.5) - 0.5) * resolution + radius;
  float p = min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;
  return clamp(-p, 0.0, 1.0);
}

void main() {
  float isInsideRoundedBounds = boxDistP(vTextureCoord);

  vec4 colorFromImage = texture2D(uSampler, vTextureCoord); 

  vec4 color = colorFromImage * vColor;
  gl_FragColor = color * isInsideRoundedBounds;
}
