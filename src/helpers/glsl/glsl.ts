/**
 * Identity function to support GLSL syntax highlighting for extensions that
 * require it.
 * @param t template string
 *
 * @example
 * ```ts
 * const vertexShader = glsl`
 * varying vec2 vUvs;
 *
 * void main() {
 *   gl_Position = vec4(position, 1.0);
 *   vUvs = uv;
 * }
`;
 * ```
 */
export function glsl(t: TemplateStringsArray) {
  return t.join('');
}
