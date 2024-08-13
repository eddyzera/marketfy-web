import config from '@rocketseat/eslint-config/react.mjs'
import stylistic from '@stylistic/eslint-plugin'
import stylisticTs from '@stylistic/eslint-plugin-ts'

export default [
  {
    plugins: {
      '@stylistic/ts': stylisticTs,
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', { code: 80 }],
    },
  },
  ...config,
]
