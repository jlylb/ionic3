import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers/provider';


@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  hasmore = true;

  products: Array<any> = [];

  selectedItem: any;

  firstitem: any;

  items: Array<any> = [];


  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public api: Api
  ) {
    this.selectedItem = this.navParams.get("item");
  }

  ionViewDidLoad() {
    this.getProducts();
    this.getFavoritesItems();
    console.log('ionViewDidLoad ProductListPage');
  }

  getFavoritesItems() {

    this.api
      .get('poems/search', { title: this.selectedItem.title })
      .subscribe((data) => {
        console.log(data)
        this.items = this.items.concat(data);
      });
  }

  getProducts() {
    for (let i = 65; i < 91; i++) {
      this.products.push(String.fromCharCode(i));
    }
    this.firstitem = this.products[0];
  }

  goData(ev) {
    if (ev.isclick == 1) {
      this.items = [];
    }
    ev.title = this.selectedItem.title;
    this.api
      .get('poems/search', ev)
      .subscribe((data) => {
        console.log(data)
        this.items = this.items.concat(data);
      });
    console.log(ev, this.items)
  }

}
