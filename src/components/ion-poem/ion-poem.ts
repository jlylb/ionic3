import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';



@Component({
  selector: 'ion-poem',
  templateUrl: 'ion-poem.html'
})
export class IonPoemComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() products: Array<any>;

  @Input() items: Array<any>;

  @Output() receive: EventEmitter<any> = new EventEmitter<any>();

  page: number = 1;

  @Input() selectedItem: any;

  @Input() isAuthor: boolean = true;

  constructor(
    private navCtrl: NavController
  ) {
    console.log('Hello IonPoemComponent Component');
  }


  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  doInfinite(infiniteScroll) {

    this.page++;

    let page = this.page;

    this.receive.emit({ page: page, letter: this.selectedItem, isclick: 0 });

    infiniteScroll.complete();

  }

  select(item) {

    this.selectedItem = item;

    this.page = 1;

    this.receive.emit({ page: this.page, letter: item, isclick: 1 });

  }

  goAuthors(item) {
    item.isAuthor = false;
    this.navCtrl.push('ProductListPage', { item: item });
  }

  goDetail(item) {
    this.navCtrl.push('PoemDetailPage', { item: item });

  }

  ngOnDestroy() {

  }
  ionViewDidEnter() {

  }
}
