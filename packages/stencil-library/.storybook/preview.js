import {defineCustomElements} from '../loader';
import { themes } from '@storybook/theming';

defineCustomElements();

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      grid: {
        disable: true,
      },
      disable: true,
    },
    docs: {
      theme: themes.light,
    },
    themes: {
      list: [
        { name: 'Light Theme', class: 'light-theme', color: '#eceff4', default: true },
        { name: 'Dark Theme', class: 'dark-theme', color: '#192635' },
      ],
    },
  },
};

export default preview;
