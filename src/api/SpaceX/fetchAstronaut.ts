import { fetch } from 'expo/fetch';

import { Astronaut } from './CrewAdapter';

const BASE_URL = process.env.EXPO_PUBLIC_SPACEX_API_URL;
const url = `${BASE_URL}/v4/crew`;

export async function fetchAstronaut() {
  const res = await fetch(url);
  const data = (await res.json()) as Astronaut[];
  const random = Math.floor(Math.random() * data.length);
  const astronaut = data[random];
  if (!astronaut) {
    throw new Error('No astronauts found');
  }
  return astronaut;
}
