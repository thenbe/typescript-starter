const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    typescript: { tsconfigPath: 'tsconfig.lint.json' },
  },
  {
    name: 'global-rules',
    rules: {
      '@typescript-eslint/consistent-type-imports': 'off', // doesn't work with nestjs: https://discord.com/channels/520622812742811698/1135243537701687466/1135270031815626863
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      'curly': 'off', // if conditions look more clear with curly braces
      'no-useless-return': 'off', // potential footgun when refactoring
    },
  },
  {
    files: ['**/tsconfig.json'],
    rules: {
      'jsonc/sort-keys': 'off',
    },
  },
)
