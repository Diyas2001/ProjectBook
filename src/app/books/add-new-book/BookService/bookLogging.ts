import {Injectable} from '@angular/core';

@Injectable()
          export class BookLogging {

  log(message: string) {
    console.log('BookLogging Service log message: ',
      message);
  }
}
