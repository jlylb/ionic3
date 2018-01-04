import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ion-poem',
  templateUrl: 'ion-poem.html'
})
export class IonPoemComponent {

  @Input() products: Array<any>;

  @Input() items: Array<any>;

  @Output() receive: EventEmitter<any> = new EventEmitter<any>();

  page: number = 1;

  @Input() selectedItem: any;

  constructor() {
    console.log('Hello IonPoemComponent Component');
  }

  doInfinite(infiniteScroll) {

    this.page++;

    let page = this.page;

    this.receive.emit({ page: page, letter: this.selectedItem, isclick: 0 });

    infiniteScroll.complete();

  }

  select(ev,item) {
 
    console.log(ev,item)

    this.selectedItem=item;

    this.page = 1;

    this.receive.emit({ page: this.page, letter: item, isclick: 1 });


  }

}
