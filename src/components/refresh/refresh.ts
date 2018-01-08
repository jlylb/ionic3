import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the RefreshComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'refresh',
  templateUrl: 'refresh.html'
})
export class RefreshComponent {

  @Input() products: Array<any>;

  @Output() refreshEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() spinner: boolean;

  constructor() {
    console.log('Hello RefreshComponent Component');
  }

  refresh() {
    //this.spinner = true;
    this.refreshEvent.emit(11111111111);
    console.log(this.spinner)

  }

}
