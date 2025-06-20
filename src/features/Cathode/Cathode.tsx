import {
  Canvas,
  Fill,
  ImageShader,
  Shader,
  Skia,
  useClock,
  useImage,
  vec,
} from '@shopify/react-native-skia';
import { useMemo } from 'react';
import { useDerivedValue } from 'react-native-reanimated';
import { useUnistyles } from 'react-native-unistyles';

import { useShader } from '@hooks/useShader';
import { remap } from '@shaders/remap';
import type { ShaderModule } from '@shaders/types';

import styles from './Cathode.styles';

const cathodeSkShader: ShaderModule = {
  module: require('./Cathode.sksl'),
  dependencies: [remap],
};

const imageURI =
  'https://cdn.dribbble.com/userupload/8452176/file/original-57a55540fcc842fbefa2b0289af4a2e4.png?compress=1&resize=800x800';

export function CathodeView() {
  const { rt } = useUnistyles();
  const clock = useClock();
  const image = useImage(imageURI);

  const { shader } = useShader(cathodeSkShader);
  const skShader = useMemo(
    () => (shader ? Skia.RuntimeEffect.Make(shader) : null),
    [shader]
  );

  const uniforms = useDerivedValue(() => ({
    uResolution: vec(rt.screen.width, rt.screen.height),
    uTime: clock.value / 1000, // convert to seconds
  }));

  if (!skShader) {
    return null;
  }

  return (
    <Canvas style={styles.canvas}>
      <Fill>
        <Shader source={skShader} uniforms={uniforms}>
          <ImageShader
            image={image}
            fit="cover"
            width={rt.screen.width}
            height={rt.screen.height}
          />
        </Shader>
      </Fill>
    </Canvas>
  );
}
