import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the IntToDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'intToDate',
})
export class IntToDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    console.log(value)
    return (new Date()).setTime(+value*1000);
  }
}
