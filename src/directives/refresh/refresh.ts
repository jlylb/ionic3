import { Directive } from '@angular/core';

/**
 * Generated class for the RefreshDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[refresh]' // Attribute selector
})
export class RefreshDirective {

  constructor() {
    console.log('Hello RefreshDirective Directive');
  }

}
