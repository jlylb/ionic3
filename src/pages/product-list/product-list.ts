import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Api } from '../../providers/provider';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/throttleTime';
import { IonPoemComponent } from '../../components/ion-poem/ion-poem';


@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage implements OnInit, AfterViewInit {

  hasmore = true;

  products: Array<any> = [];

  selectedItem: any;

  firstitem: any = '';

  @ViewChild('poem') poem: IonPoemComponent;

  items: Array<any> = [];

  isAuthor: boolean = true;

  loading: Loading;


  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public api: Api
    , private loadingCtrl: LoadingController
  ) {
    this.selectedItem = this.navParams.get("item");
    if ('isAuthor' in this.selectedItem) {
      this.isAuthor = this.selectedItem.isAuthor;
    }
  }

  ngOnInit() {
    this.getProducts();
  }

  ngAfterViewInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  ionViewWillLeave() {


  }


  getProducts() {
    let param: any = {};

    if (this.isAuthor) {
      param.category = this.selectedItem.title;
      param.group = 'author_letter';
      param.field = 'author_letter';
    } else {
      param.group = 'title_letter';
      param.field = 'title_letter';
      param.author = this.selectedItem.author;
      param.category = this.selectedItem.category;
    }

    this.api
      .get('poems/search', param)
      .map((res: any) => {
        return res.map(function (v) {
          return v.author_letter || v.title_letter;
        });
      })
      .subscribe((data) => {
        console.log(data)
        this.products = data;
        this.firstitem = this.products[0];
        this.poem.select(this.firstitem)

      });


  }

  goData(ev) {
    console.log(ev)
    if (ev.isclick == 1) {
      this.items = [];
      this.loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: '加载数据.....'
      });

      this.loading.present();
    }
    let param: any = {};
    param.category = this.selectedItem.title;
    param.page = ev.page;
    param.letter = ev.letter;
    let group: any;
    let field: any;
    //this.isAuthor=ev.isAuthor;
    if (this.isAuthor) {
      group = 'author';
      field = 'author_letter,author,category';
    } else {
      group = '';
      field = 'id,title,author_letter,author,category,content,zhujie';
      param.category = this.selectedItem.category;
      param.letter = '';
      param.title_letter = ev.letter;
      param.author = this.selectedItem.author;
    }
    param.group = group;
    param.field = field;
    this.api
      .get('poems/search', param)
      .throttleTime(1000)
      .subscribe((data) => {
        console.log(data)
        this.items = this.items.concat(data);
        if (this.loading) {
          this.loading.dismiss();
        }
      });
  }

}
