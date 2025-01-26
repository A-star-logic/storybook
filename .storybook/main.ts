import { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: [
    '../UI/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)', // Update to include .vue stories
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Add the Vue plugin for Vite
    config.plugins = [
      ...(config.plugins || []),
      vue(),
    ];

    // Resolve Vue alias
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        vue: resolve(require.resolve('vue'), '../../dist/vue.esm-bundler.js'),
      },
    };

    return config;
  },
};

export default config;
