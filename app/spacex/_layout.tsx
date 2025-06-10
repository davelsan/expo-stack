import { Slot } from 'expo-router';

import { provideCrewAdapter, fetchAstronaut } from '@api/SpaceX';
import { ContextProvider } from '@helpers/react';

export default function SpaceXLayout() {
  return (
    <ContextProvider providers={[provideCrewAdapter({ fetchAstronaut })]}>
      <Slot />
    </ContextProvider>
  );
}
