import { createContext, type PropsWithChildren } from 'react';

/**
 * Generic context provider factory. Used to define the interface contracts for
 * any given context type.
 *
 * @example Concrete API adapter for a specific route
 * ```tsx
 * // SomeAdapter.ts
 *
 * type DTO = { ... };
 *
 * type Adapter = {
 *   fetchFn: () => Promise<DTO>;
 * };
 *
 * const {
 *   provideContext: provideAdapter,
 *   Context: AdapterContext,
 * } = createGenericAdapter<Adapter>();
 *
 * function useAdapter() {
 *   const context = use(AdapterContext);
 *   if (!context) {
 *     throw new Error('useAdapter must be used within an AdapterContext');
 *   }
 *   return context;
 * }
 *
 * // SomeScreenLayout.tsx
 *
 * function SomeScreenLayout() {
 *   const adapter = useAdapter();
 *   return (
 *     <ContextProvider providers={[provideAdapter(adapter)]}>
 *       <SomeScreen />
 *     </ContextProvider>
 *   );
 * }
 * ```
 */
export function createGenericAdapter<T>() {
  const Context = createContext<T | undefined>(undefined);

  function provideContext(adapter: T) {
    return function ContextProvider({ children }: PropsWithChildren) {
      return <Context value={adapter}>{children}</Context>;
    };
  }

  return {
    Context,
    provideContext,
  };
}
