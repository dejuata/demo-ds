import { create } from '@storybook/theming';
import Light from './logos/light.svg';

let light = create({
  base: 'light',

  // Typography
  fontBase: '"Poppins", sans-serif',
  // fontCode: 'monospace',

  brandTitle: 'Pragma Design System',
  brandUrl: 'https://example.com',
  brandImage: Light,
  brandTarget: '_self',

  //
  colorPrimary: '#330072',
  colorSecondary: '#6429cd',

  // UI
  appBg: '#F6F7FC',
  appContentBg: '#F6F7FC',
  // appBorderColor: '#585C6D',
  // appBorderRadius: 4,

  // Text colors
  textColor: '#330072',
  // textInverseColor: '#330072',

  // Toolbar default and active colors
  barTextColor: '#330072',
  barSelectedColor: '#330072',
  barBg: '#F6F7FC',

  // Form colors
  // inputBg: 'red',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,
});

let dark = create({
  base: 'dark',
  brandTitle: 'Pragma',
  brandUrl: 'https://example.com',
  brandImage: Light,
  brandTarget: '_self',
});

export default { light, dark };
