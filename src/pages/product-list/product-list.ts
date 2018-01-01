import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  hasmore = true;
  products: any;
  selectedItem: any;

  spinner1: boolean = true;

  params = {
    page: 1
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = this.navParams.get("item");
  }

  ionViewDidLoad() {
    this.getFavoritesItems();
    console.log('ionViewDidLoad ProductListPage');
  }

  getFavoritesItems() {
    this.getProducts().then((resp)=>{
      this.products=resp;
      this.params.page += 1;
      this.spinner1 = false;
    });
  }

  doInfinite(infiniteScroll) {
    if (this.hasmore == false) {
      infiniteScroll.complete();
      return;
    }

    this.getProducts().then((resp)=>{

      if(this.params.page>10){
        this.hasmore = false;
        console.log("没有数据啦！")
      }else{
        let that=this;
        setTimeout(function(){
          that.products = that.products.concat(resp);
          that.params.page += 1;
          infiniteScroll.complete();
        },1000);

      }
     
    });

  }

  getProducts() {
    let products = [
      {title:"1111",url:"assets/img/speakers/bear.jpg",discount:"199",price:"499"},
      {title:"2222",url:"assets/img/speakers/bear.jpg",discount:"299",price:"5499"},
      {title:"33333",url:"assets/img/speakers/bear.jpg",discount:"399",price:"4499"},
      {title:"44444",url:"assets/img/speakers/bear.jpg",discount:"499",price:"3499"},
      {title:"55555",url:"assets/img/speakers/bear.jpg",discount:"599",price:"2499"},
      {title:"66666",url:"assets/img/speakers/bear.jpg",discount:"699",price:"1499"},
      {title:"77777",url:"assets/img/speakers/bear.jpg",discount:"799",price:"3499"},
      {title:"88888",url:"assets/img/speakers/bear.jpg",discount:"899",price:"2499"},
      {title:"99999",url:"assets/img/speakers/bear.jpg",discount:"999",price:"1499"},
      {title:"100000",url:"assets/img/speakers/bear.jpg",discount:"99",price:"299"}
    ];
    return new Promise((resolve)=>{
        resolve(products);
    })
  }

}
