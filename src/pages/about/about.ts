import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('scroll') scrollElement: any;
  @ViewChild('spinner') spinnerElement: any;

  categories: Array<any> = [];
  selectedMenuTarget: any;
  products: Array<any> = [];
  hasmore = true;

  islock = false;

  params = {
    page: 1
  }

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.getCategories();
    this.addScrollEventListener();
  }

  addScrollEventListener() {
    this.scrollElement._scrollContent.nativeElement.onscroll = event => {
      if (this.spinnerElement) {
        //元素顶端到可见区域顶端的距离
        var top = this.spinnerElement.nativeElement.getBoundingClientRect().top;
        //可见区域高度
        var clientHeight = document.documentElement.clientHeight;
        if (top <= clientHeight) {
          console.log("ready loadmore...");
          this.doInfinite();
        }
      }
    }
  }

  // 获取左侧菜单

  getCategories() {

    this.categories = [
      { title: "先秦", icon: "star" },
      { title: '汉朝', icon: "heart" },
      { title: '魏晋', icon: "help-circle" },
      { title: '南北朝', icon: "image" },
      { title: '隋朝', icon: "information-circle" },
      { title: '唐朝', icon: "leaf" },
      { title: '宋朝', icon: "locate" },
      { title: '金朝', icon: "mail" },
      { title: '辽朝', icon: "moon" },
      { title: '元朝', icon: "navigate" },
      { title: '明朝', icon: "notifications" },
      { title: '清朝', icon: "nuclear" }
    ];
    this.getProducts();
  }
  // 选中左侧菜单
  itemClick(c, event) {
    this.products = [];
    var initSelected: any = document.getElementsByClassName('menuItem');
    if (initSelected[0].classList.contains("active")) {
      initSelected[0].classList.remove("active")
    }

    //移除上次选中菜单的样式
    if (this.selectedMenuTarget) {
      this.selectedMenuTarget.classList.remove("active")
    }

    //修改本次选中菜单的样式
    event.currentTarget.classList.add("active");

    //将本次选中的菜单记录
    this.selectedMenuTarget = event.currentTarget;

    this.hasmore = true;

    this.params.page = 1;

    this.getProducts();
  }

  getProducts() {
    this.getApiProducts().then((resp) => {
      this.products = this.products.concat(resp);
      this.params.page += 1;
    });
  }

  doInfinite() {
    if (this.islock) {
      return;
    }
    if (this.hasmore == false) {
      return;
    }
    this.islock = true;
    this.getApiProducts().then((resp) => {
      this.islock = false;
      if (this.params.page > 10) {
        this.hasmore = false;
        console.log("没有数据啦！")
      } else {
        let that = this;
        setTimeout(function () {
          that.products = that.products.concat(resp);
          that.params.page += 1;
          //infiniteScroll.complete();
        }, 1000);

      }

    });
  }

  goDetails(item) {
    this.navCtrl.push('ProductDetailsPage', { item: item });
  }

  getApiProducts() {
    let products = [
      { title: "1111", url: "assets/img/speakers/bear.jpg", discount: "199", price: "499" },
      { title: "2222", url: "assets/img/speakers/bear.jpg", discount: "299", price: "5499" },
      { title: "33333", url: "assets/img/speakers/bear.jpg", discount: "399", price: "4499" },
      { title: "44444", url: "assets/img/speakers/bear.jpg", discount: "499", price: "3499" },
      { title: "55555", url: "assets/img/speakers/bear.jpg", discount: "599", price: "2499" },
      { title: "66666", url: "assets/img/speakers/bear.jpg", discount: "699", price: "1499" },
      { title: "77777", url: "assets/img/speakers/bear.jpg", discount: "799", price: "3499" },
      { title: "88888", url: "assets/img/speakers/bear.jpg", discount: "899", price: "2499" },
      { title: "99999", url: "assets/img/speakers/bear.jpg", discount: "999", price: "1499" },
      { title: "100000", url: "assets/img/speakers/bear.jpg", discount: "99", price: "299" }
    ];
    return new Promise((resolve) => {
      resolve(products);
    })
  }

}
