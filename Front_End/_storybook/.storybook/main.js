const globalModules = require('global-modules');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        scriptsPackageName: globalModules + '/react-scripts',
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
