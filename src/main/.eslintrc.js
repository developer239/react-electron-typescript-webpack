module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'typescript',
    'import',
  ],
  extends: [
    '@strv/node/v10',
    '@strv/node/style',
    '@strv/node/optional',
    '@strv/typescript',
    '@strv/typescript/style',
    'prettier',
  ],
  rules: {
    'import/group-exports': 0,
    'node/no-unsupported-features/es-syntax': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'new-cap': 0,
    'import/exports-last': 0,
    'import/no-unused-modules': 0,
    'no-undefined': 0,
    'id-length': 0,
    'no-process-env': 0
  },
}
