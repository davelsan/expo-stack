import { render } from '@testing-library/react-native';

import { AstronautData } from '../AstronautData';
import { SpaceXView } from '../SpaceX';

import {
  fakeAstronaut,
  fakeProviders,
  fetchAstronautError,
  fetchAstronautSuccess,
} from './utils';

describe('SpaceX', () => {
  it('Render Astronaut data', async () => {
    const component = render(<AstronautData astronaut={fakeAstronaut} />);
    await component.findByText(fakeAstronaut.name);
    await component.findByText(fakeAstronaut.agency);
    await component.findByText(fakeAstronaut.status);
  });

  it('Render SpaceX success', async () => {
    const component = render(<SpaceXView />, {
      wrapper: fakeProviders(fetchAstronautSuccess),
    });

    expect(await component.findByText(fakeAstronaut.name));
    expect(await component.findByText(fakeAstronaut.agency));
    expect(await component.findByText(fakeAstronaut.status));
  });

  it('Render SpaceX error', async () => {
    const component = render(<SpaceXView />, {
      wrapper: fakeProviders(fetchAstronautError),
    });
    expect(await component.findByText('Something went wrong'));
  });
});
