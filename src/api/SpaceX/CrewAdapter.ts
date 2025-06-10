import { use } from 'react';

import { createGenericAdapter } from '@helpers/react';

export type Astronaut = {
  name: string;
  agency: string;
  status: string;
};

export type CrewAdapter = {
  fetchAstronaut: () => Promise<Astronaut>;
};

export const {
  provideContext: provideCrewAdapter,
  Context: CrewAdapterContext,
} = createGenericAdapter<CrewAdapter>();

export function useCrewAdapter() {
  const context = use(CrewAdapterContext);
  if (!context) {
    throw new Error('useCrewAdapter must be used within a CrewAdapterContext');
  }
  return context;
}
