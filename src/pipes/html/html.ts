import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the HtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {

  constructor(
    public sanitizer: DomSanitizer
  ) {
 }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(html: string, ...args) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
