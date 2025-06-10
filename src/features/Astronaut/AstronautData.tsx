import { View } from 'react-native';

import type { Astronaut } from '@api/SpaceX';
import { Text } from '@typography/Text';

export type AstronautProps = {
  astronaut: Astronaut;
  isUpdating?: boolean;
};

export function AstronautData({ astronaut, isUpdating }: AstronautProps) {
  return (
    <View>
      <Text>{astronaut.name}</Text>
      <Text>{astronaut.agency}</Text>
      <Text>{astronaut.status}</Text>
      {isUpdating && <Text>Updating...</Text>}
    </View>
  );
}
