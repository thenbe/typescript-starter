import typescript from 'rollup-plugin-typescript2';
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: false,
    root: './',
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
          moduleResolution: 'Bundler',
        },
      },
    }),
		swc.vite(),
	],
});
