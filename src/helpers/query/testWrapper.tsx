import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react-native';
import type { PropsWithChildren, ReactElement } from 'react';

/**
 * Create a new QueryClient suitable for testing various query states.
 * @see https://tkdodo.eu/blog/testing-react-query#turn-off-retries
 * @see https://github.com/TkDodo/testing-react-query/blob/main/src/tests/utils.tsx#L5
 * @see https://github.com/TanStack/query/issues/1847#issuecomment-786191274
 * @see https://github.com/TanStack/query/discussions/1692#discussioncomment-368213
 */
export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0, // or less elegant: "jest --detectOpenHandles --forceExit"
      },
      mutations: {
        retry: false,
        gcTime: 0,
      },
    },
  });
}

/**
 * Convenience function to create a new QueryClientProvider for every new test.
 * @see https://tkdodo.eu/blog/testing-react-query#for-custom-hooks
 */
export function provideQueryClient() {
  const client = createTestQueryClient();
  return function TestQueryClient({ children }: PropsWithChildren) {
    return (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
  };
}

/**
 * Convenience function to render a component with a QueryClientProvider,
 * borrowed from `@tanstack/react-query` source code.
 * @param client query client
 * @param ui component to render
 * @see https://tkdodo.eu/blog/testing-react-query#for-components
 * @see https://github.com/TanStack/query/blob/ead2e5dd5237f3d004b66316b5f36af718286d2d/src/react/tests/utils.tsx#L6-L17
 */
export function renderWithClient(ui: ReactElement, options?: RenderOptions) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
    options
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}
