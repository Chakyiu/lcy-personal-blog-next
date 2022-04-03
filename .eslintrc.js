module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
      },
    ],
  },
}
