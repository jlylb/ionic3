import { Component } from '@angular/core';

/**
 * Generated class for the FormInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-input',
  templateUrl: 'form-input.html'
})
export class FormInputComponent {

  text: string;

  constructor() {
    console.log('Hello FormInputComponent Component');
    this.text = 'Hello World';
  }

}
