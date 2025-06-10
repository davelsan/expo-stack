import { renderHook, waitFor } from '@testing-library/react-native';

import { useAstronaut } from '../useAstronaut';

import {
  fakeAstronaut,
  fakeProviders,
  fetchAstronautError,
  fetchAstronautSuccess,
} from './utils';

describe('useAstronaut', () => {
  it('Success', async () => {
    const { result } = renderHook(() => useAstronaut(), {
      wrapper: fakeProviders(fetchAstronautSuccess),
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual(fakeAstronaut);
  });

  it('Error', async () => {
    const { result } = renderHook(() => useAstronaut(), {
      wrapper: fakeProviders(fetchAstronautError),
    });
    await waitFor(() => expect(result.current.isError).toBe(true));
  });
});
