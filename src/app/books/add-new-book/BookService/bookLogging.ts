import {Injectable} from '@angular/core';

@Injectable()
          export class BookLogging {

  // tslint:disable-next-line:typedef
  log(message: string) {
    console.log('BookLogging Service log message: ',
      message);
  }
}
