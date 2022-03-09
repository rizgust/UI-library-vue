const path = require('path');
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  webpackFinal: function (config) {
    if (!config.resolve?.alias)
      return config;

    config.resolve.alias['quark'] = path.resolve(__dirname, '../');

    return config;
  }
}