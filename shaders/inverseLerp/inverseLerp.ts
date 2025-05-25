import type { ShaderModule } from '../types';

export const inverseLerp: ShaderModule = {
  module: require('./inverseLerp.glsl'),
};
