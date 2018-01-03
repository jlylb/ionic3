import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'ion-poem',
  templateUrl: 'ion-poem.html'
})
export class IonPoemComponent {

  @Input() products: Array<any>;
  @Input() items: Array<any>;
  @Output() receive: EventEmitter<any>=new EventEmitter<any>();

  text: string;

  constructor() {
    console.log('Hello IonPoemComponent Component');
    this.text = 'Hello World';
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      // for (let i = 0; i < 30; i++) {
      //   this.items.push( this.items.length );
      // }

      this.receive.emit({page:1,title:'A',isclick:0});
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  select(ev){
    let st=ev.target.firstElementChild.innerText;
    console.log(ev,st)

    this.receive.emit({page:1,title:st,isclick:1});
  

  }

}
