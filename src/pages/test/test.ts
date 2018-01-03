import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  products: Array<any> = [];
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getProducts();
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  getProducts() {
    for(let i=65;i<91;i++){
      this.products.push(String.fromCharCode(i));
    }
    
  }

  goData(ev){
    if(ev.isclick==1){
      this.items=[];
    }
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
    console.log(ev,this.items)
  }

 

}
