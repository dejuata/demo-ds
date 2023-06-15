import { create } from '@storybook/theming';
import Logo from './logo.svg';

let light = create({
  base: 'normal',
  brandTitle: 'Pragma',
  brandUrl: 'https://example.com',
  brandImage: Logo,
  brandTarget: '_self',
});

let dark = create({
  base: 'dark',
  brandTitle: 'Pragma',
  brandUrl: 'https://example.com',
  brandImage: Logo,
  brandTarget: '_self',
});

export default { light, dark };
