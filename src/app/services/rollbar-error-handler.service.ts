import { Injectable, ErrorHandler, Inject } from '@angular/core';
import * as Rollbar from 'rollbar';
import { RollbarService } from '../app.module';

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  handleError(err: any): void {
    this.rollbar.error(err.originalError || err);
  }
}
