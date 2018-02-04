import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MydatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mydate',
})
export class MydatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any[], ...args) {
    value.map((item)=>{
      item.created_at=(new Date()).setTime(+item.created_at*1000);
      return item;
    });
   // return (new Date()).setTime(+value*1000);
   return value;
  }
}
