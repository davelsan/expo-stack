<h1 align="center">Expo Stack</h1>
<p align="center"><i>A standalone Expo SDK53 starter</i></p>

### Stack

- Expo [SDK53](https://expo.dev/changelog/sdk-53-beta) with the new architecture enabled.
- [Unistyles 3.0](https://www.unistyl.es/v3/start/introduction) as a drop-in replacement for the `StyleSheet` API.
- [Radix UI](https://www.radix-ui.com/colors) to provide the base color palettes.
- [React Hook Form](https://react-hook-form.com/) to compose form controllers.
- [Zod](https://zod.dev/) for the validation of form schemas and API responses.
- [ESlint 9](https://eslint.org/docs/latest/use/getting-started) configured with the new flat config.

### Examples

#### Google Fonts: Platform-based naming
[`./theme/vars/fonts.ts`](./theme/vars/fonts.ts)

#### Google Fonts: Embedding with `expo-font`
[`./app.config.ts`](./app.config.ts)

#### Google Fonts: Using custom and default faces
[`./features/home/HomeView.tsx`](./features/home/HomeView.tsx)