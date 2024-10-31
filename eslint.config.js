import ts from '@typed-sigterm/eslint-config';

export default ts({}, {
  files: ['docs/**/*'],
  rules: {
    'vue/padding-line-between-blocks': [0],
  },
});
