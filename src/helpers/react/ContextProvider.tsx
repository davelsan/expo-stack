import type { FC, PropsWithChildren, ReactNode } from 'react';

type ContextProviderProps = {
  providers: FC<{ children: ReactNode }>[];
};

/**
 * Generic context composer component. Useful to reduce Provider nesting.
 * @example static providers
 * ```tsx
 * <ContextProvider providers={[ThemeProvider, QueryProvider]}>
 *   <App />
 * </ContextProvider>
 * ```
 * @example dynamic API providers
 * ```tsx
 * <ContextProvider providers={[provideAdapter({ fetchFn })]}>
 *   <Screen />
 * </ContextProvider>
 * ```
 */
export function ContextProvider({
  children,
  providers,
}: PropsWithChildren<ContextProviderProps>) {
  const Providers = providers.reduce(
    (Prev, Curr) =>
      function Provider({ children }) {
        return Prev ? (
          <Prev>
            <Curr>{children}</Curr>
          </Prev>
        ) : (
          <Curr>{children}</Curr>
        );
      }
  );

  return <Providers>{children}</Providers>;
}
