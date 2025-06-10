import { SafeAreaView } from 'react-native-safe-area-context';

import { useAstronaut } from './useAstronaut';
import { AstronautData } from './AstronautData';
import { AstronautError } from './AstronautError';
import styles from './SpaceX.styles';

export function SpaceXView() {
  const { data: astronaut, isError, isFetching } = useAstronaut();

  return (
    <SafeAreaView style={styles.safeArea}>
      {astronaut ? (
        <AstronautData astronaut={astronaut} isUpdating={isFetching} />
      ) : isError ? (
        <AstronautError />
      ) : null}
    </SafeAreaView>
  );
}
