import * as Rollbar from 'rollbar'; // When using Typescript < 3.6.0.
// `import Rollbar from 'rollbar';` is the required syntax for Typescript 3.6.x.
// However, it will only work when setting either `allowSyntheticDefaultImports`
// or `esModuleInterop` in your Typescript options.

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarterComponent } from './components/starter/starter.component';
import { RollbarErrorHandler } from './services/rollbar-error-handler.service';

const rollbarConfig = {
  accessToken: '0b18a25a4c934b09880cee754733ea6b',
  captureUncaught: true,
  captureUnhandledRejections: true,
};

export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, StarterComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: RollbarService, useFactory: rollbarFactory },
  ],
})
export class AppModule {}
