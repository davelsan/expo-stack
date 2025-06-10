import { inverseLerp } from '../inverseLerp';
import type { ShaderModule } from '../types';

export const remap: ShaderModule = {
  module: require('./remap.glsl'),
  dependencies: [inverseLerp],
};
