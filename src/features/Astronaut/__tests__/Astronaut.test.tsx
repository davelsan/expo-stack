import { render } from '@testing-library/react-native';

import { AstronautView } from '../Astronaut';
import { AstronautData } from '../AstronautData';

import {
  fakeAstronaut,
  fakeProviders,
  fetchAstronautError,
  fetchAstronautSuccess,
} from './utils';

describe('Astronaut', () => {
  it('Render Astronaut data', async () => {
    const component = render(<AstronautData astronaut={fakeAstronaut} />);
    await component.findByText(fakeAstronaut.name);
    await component.findByText(fakeAstronaut.agency);
    await component.findByText(fakeAstronaut.status);
  });

  it('Render Astronaut success', async () => {
    const component = render(<AstronautView />, {
      wrapper: fakeProviders(fetchAstronautSuccess),
    });

    expect(await component.findByText(fakeAstronaut.name));
    expect(await component.findByText(fakeAstronaut.agency));
    expect(await component.findByText(fakeAstronaut.status));
  });

  it('Render Astronaut error', async () => {
    const component = render(<AstronautView />, {
      wrapper: fakeProviders(fetchAstronautError),
    });
    expect(await component.findByText('Something went wrong'));
  });
});
