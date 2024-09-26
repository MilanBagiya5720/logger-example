import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { version } from '../environments/version';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'logger-example';
  appVersion = version;

  constructor(private loggerService: LoggerService) {
    console.log('Current Version:', this.appVersion);

    this.loggerService.logInfo('Hello, logger-example');

    this.loggerService.logDebug('Debug message');

    this.loggerService.logError('Error message');

    this.loggerService.logTrace('Trace message');

    this.loggerService.logWarning('Warning message');

    this.loggerService.logFatal('Fatal message');

    this.loggerService.log('Log message');
  }
}
