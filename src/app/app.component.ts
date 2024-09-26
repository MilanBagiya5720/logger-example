import { Component, VERSION } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'logger-example';
  version = VERSION.full;

  constructor(private loggerService: LoggerService) {
    this.loggerService.logInfo('Hello, logger-example');

    this.loggerService.logDebug('Debug message');

    this.loggerService.logError('Error message');

    this.loggerService.logTrace('Trace message');

    this.loggerService.logWarning('Warning message');

    this.loggerService.logFatal('Fatal message');

    this.loggerService.log('Log message');
  }
}
