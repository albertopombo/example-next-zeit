const withTypescript = require('@zeit/next-typescript');
const withCss = require('@zeit/next-css');

module.exports = withTypescript(
  withCss({
    cssModules: true,
    cssLoaderOptions: {
      camelCase: true,
    },
    target: 'server',
  }),
);
