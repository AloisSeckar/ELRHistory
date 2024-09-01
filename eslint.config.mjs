import withNuxt from './.nuxt/eslint.config.mjs'

// config is being passed as an array of separate objects
// as suggested here: https://github.com/nuxt/eslint/discussions/413

export default withNuxt([

  // files to be processed (JS/TS + Vue components)
  { files: ['**/*.js', '**/*.ts', '**/*.vue'] },

  // files to be ignored (auto-generated API definition)
  { ignores: ['**/_api.ts'] },

  // `rules` section can follow, where you can change default eslint behaviour if needed
  // you can adjust or even turn off some rules if you cannot or don't want to satisfy them
  // it is not recommended to do so though
  {
    rules: {
    // default for this rule is "1", but I find it too restrictive
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 3,
        },
      }],
      'vue/html-closing-bracket-newline': ['error', {
        multiline: 'never',
      }],
      '@stylistic/brace-style': 'off',
    },
  },
])
