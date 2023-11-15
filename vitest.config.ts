import typescript from 'rollup-plugin-typescript2';
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: false,
    root: './',
  },
  plugins: [
    // typescript plugin is required for vitest to work with nestia decorators. It needs to be placed before swc plugin.
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
          moduleResolution: 'Bundler',
        },
      },
    }),
    // This is required to build the test files with SWC
    swc.vite({
      // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
      module: { type: 'es6' },
    }),
  ],
});
