import { PropsWithChildren } from 'react';

import { Astronaut, provideCrewAdapter } from '@api/SpaceX';
import { provideQueryClient } from '@helpers/query/testWrapper';
import { ContextProvider } from '@helpers/react';

export const fakeAstronaut: Astronaut = {
  name: 'Robert Behnken',
  agency: 'NASA',
  status: 'active',
};

export const fetchAstronautSuccess = () => Promise.resolve(fakeAstronaut);
export const fetchAstronautError = () => Promise.reject(new Error('Error'));

export const fakeProviders = (fetchFn: () => Promise<Astronaut>) =>
  function FakeProviders({ children }: PropsWithChildren) {
    return (
      <ContextProvider
        providers={[
          provideQueryClient(),
          provideCrewAdapter({ fetchAstronaut: fetchFn }),
        ]}
      >
        {children}
      </ContextProvider>
    );
  };
