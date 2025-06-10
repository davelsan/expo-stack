import type { ShaderModule } from '../types';
import { inverseLerp } from '../inverseLerp';

export const remap: ShaderModule = {
  module: require('./remap.glsl'),
  dependencies: [inverseLerp],
};
