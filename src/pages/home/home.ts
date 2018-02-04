import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Api } from '../../providers/provider';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];

  spinner: boolean = true;

  params = {
    page: 1,
    pageSize: 20
  }

  constructor(
    public navCtrl: NavController
    , public api: Api
  ) {
    this.getCategories();
    this.getSlides();
    this.getProducts();
  }

  getSlides() {
    this.slides = [
      { title: "先秦1", url: "assets/img/advance-card-bttf.png" },
      { title: "先秦2", url: "assets/img/advance-card-jp.jpg" },
      { title: "先秦3", url: "assets/img/advance-card-tmntr.jpg" },
    ];
  }

  //获取分类
  getCategories() {

    this.categories = [
      { title: "先秦", icon: "star" },
      { title: '汉朝', icon: "heart" },
      { title: '魏晋', icon: "help-circle" },
      { title: '南北朝', icon: "image" },
      { title: '隋朝', icon: "information-circle" },
      { title: '唐', icon: "leaf" },
      { title: '宋朝', icon: "locate" },
      { title: '金朝', icon: "mail" },
      { title: '辽朝', icon: "moon" },
      { title: '元朝', icon: "navigate" },
      { title: '明朝', icon: "notifications" },
      { title: '清朝', icon: "nuclear" }
    ];

  }

  getProducts() {
    this.getdata();
  }

  goProductList(item) {
    this.navCtrl.push('ProductListPage', { item: item });
  }

  goTest(item) {
    this.navCtrl.push('TestPage', { item: item });
  }

  getdata() {

    let page = Math.ceil(Math.random() * 100);
    this.spinner = true;
    let req = this.api.get('poems/search', { page: page, "per-page": 4 });
    req.subscribe((res: any) => {
      console.log(res)
      this.products = res;
    }, err => {
      console.error(err)
    }, () => {
      this.spinner = false;
    })

  }

}
