import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
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

  spinner1: boolean = false;

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
      {title:"先秦1",url:"assets/img/advance-card-bttf.png"},
      {title:"先秦2",url:"assets/img/advance-card-jp.jpg"},
      {title:"先秦3",url:"assets/img/advance-card-tmntr.jpg"},
    ];
  }

 //获取分类
 getCategories() {

    this.categories = [
      {title:"先秦",icon:"star"},
      {title:'汉朝',icon:"heart"},
      {title:'魏晋',icon:"help-circle"},
      {title:'南北朝',icon:"image"},
      {title:'隋朝',icon:"information-circle"},
      {title:'唐朝',icon:"leaf"},
      {title:'宋朝',icon:"locate"},
      {title:'金朝',icon:"mail"},
      {title:'辽朝',icon:"moon"},
      {title:'元朝',icon:"navigate"},
      {title:'明朝',icon:"notifications"},
      {title:'清朝',icon:"nuclear"}
    ];

}

getProducts() {
  this.products = [
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
}

goProductList(item) {
  this.navCtrl.push('ProductListPage', { item: item });
}

goTest(item) {
  this.navCtrl.push('TestPage', { item: item });
}

}
