import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NewpipePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'newpipe',
})
export class NewpipePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return +value*1000;
  }
}
