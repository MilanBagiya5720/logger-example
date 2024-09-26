import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(private logger: NGXLogger) {}

  logInfo(message: string): void {
    this.logger.info(message);
  }

  logError(message: string): void {
    this.logger.error(message);
  }

  logDebug(message: string): void {
    this.logger.debug(message);
  }

  logTrace(message: string): void {
    this.logger.trace(message);
  }

  logWarning(message: string): void {
    this.logger.warn(message);
  }

  logFatal(message: string): void {
    this.logger.fatal(message);
  }

  log(message: string): void {
    this.logger.log(message);
  }
}
