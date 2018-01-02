import { Component, Input} from '@angular/core';


@Component({
  selector: 'ion-poem',
  templateUrl: 'ion-poem.html'
})
export class IonPoemComponent {

  @Input() products: Array<any>;
  @Input() items: Array<any>;

  text: string;

  constructor() {
    console.log('Hello IonPoemComponent Component');
    this.text = 'Hello World';
  }

}
