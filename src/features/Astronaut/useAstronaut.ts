import { useQuery } from '@tanstack/react-query';

import { useCrewAdapter } from '@api/SpaceX';

const queryKey = ['astronaut'];

export function useAstronaut() {
  const { fetchAstronaut } = useCrewAdapter();
  return useQuery({
    queryKey,
    queryFn: fetchAstronaut,
  });
}

useAstronaut.queryKey = queryKey;
