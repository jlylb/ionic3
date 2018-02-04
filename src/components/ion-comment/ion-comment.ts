import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the IonCommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-comment',
  templateUrl: 'ion-comment.html',
})
export class IonCommentComponent {

  @Output() receive: EventEmitter<any> = new EventEmitter<any>();

  @Input() items: Array<any> = [];


  constructor() {

  }

}
