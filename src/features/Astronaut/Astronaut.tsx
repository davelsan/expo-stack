import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Astronaut.styles';
import { AstronautData } from './AstronautData';
import { AstronautError } from './AstronautError';
import { useAstronaut } from './useAstronaut';

export function AstronautView() {
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
