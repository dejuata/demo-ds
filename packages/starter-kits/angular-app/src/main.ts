import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { applyPolyfills, defineCustomElements as defineProductMgmtExp } from 'stencil-library/loader';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

applyPolyfills().then(() => {
  defineProductMgmtExp(window);
});
