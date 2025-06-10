<h1 align="center">Expo Stack</h1>
<p align="center"><i>Simple Expo SDK53 examples</i></p>

### Stack

- [x] Expo [SDK53](https://expo.dev/changelog/sdk-53-beta) with the new architecture enabled.
- [x] [Unistyles 3.0](https://www.unistyl.es/v3/start/introduction) as a drop-in replacement for the `StyleSheet` API.
- [x] [Radix UI](https://www.radix-ui.com/colors) colors to provide the base palettes.
- [x] [React Hook Form](https://react-hook-form.com/) to compose form controllers.
- [x] [Zod](https://zod.dev/) for the validation of form schemas and API responses.
- [x] [ESlint 9](https://eslint.org/docs/latest/use/getting-started) configured with the new flat config.
- [x] [Jest](https://github.com/expo/expo/tree/main/packages/jest-expo) for unit testing.
- [ ] [Maestro](https://github.com/mobile-dev-inc/Maestro) for UI and E2E testing.

## Examples

### API Adapter (External) and Unit Tests
- External API adapter pattern.
- Component Unit tests using `@tanstack/query`.

[`./src/api/SpaceX/`](./src/api/SpaceX/)
[`./src/features/Astronaut/`](./src/features/Astronaut/)

#### Skia Shader
- Import GLSL files as shader modules.
- Render an `ImageShader`.

[`./src/hooks/useShader.ts`](./src/hooks/useShader.ts)
[`./src/features/Cathode/`](./src/features/Cathode/)

#### Typography
- Embed Google Fonts with `expo-font`.
- Platform-based naming.
- Custom and default faces.

[`./app.config.ts`](./app.config.ts)
[`./src/theme/vars/fonts.ts`](./src/theme/vars/fonts.ts)
[`./src/features/Typography/`](./src/features/Typography/)

## Commands

```bash
pnpm run start                  # Start the development server
pnpm run android                # Create an Android development build
pnpm run ios                    # Create an iOS development build
pnpm run android:build:preview  # EAS preview build for Android
pnpm run android:build:prod     # EAS production build for Android
pnpm run ios:build:preview      # EAS preview build for iOS
pnpm run ios:build:prod         # EAS production build for iOS
pnpm run eas:update:preview     # EAS update for preview
pnpm run eas:update:prod        # EAS update for production
pnpm run lint                   # Run ESLint and fix issues
pnpm run format                 # Run Prettier and fix formatting issues
pnpm run test                   # Run Jest tests
pnpm run expo:check             # Check dependency versions
pnpm run expo:doctor            # Check for issues with Expo Doctor
pnpm run expo:install           # Install expo dependencies
pnpm run expo:prebuild          # Prebuild the app
```
