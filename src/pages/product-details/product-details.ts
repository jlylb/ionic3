import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';


@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  selectedItem: any;
  imgs: any;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    //, private themeableBrowser: ThemeableBrowser
  ) {
    this.selectedItem = this.navParams.get("item");
    if (this.selectedItem.SmallImages) {
        this.imgs = this.selectedItem.SmallImages;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  goBuy() {
//     const options: ThemeableBrowserOptions = {
//       statusbar: {
//           color: '#ffffffff'
//       },
//       toolbar: {
//           height: 44,
//           color: '#f0f0f0ff'
//       },
//       title: {
//           color: '#003264ff',
//           showPageTitle: true
//       },
//       backButton: {
//           image: 'back',
//           imagePressed: 'back_pressed',
//           align: 'left',
//           event: 'backPressed'
//       },
//       forwardButton: {
//           image: 'forward',
//           imagePressed: 'forward_pressed',
//           align: 'left',
//           event: 'forwardPressed'
//       },
//       closeButton: {
//           image: 'close',
//           imagePressed: 'close_pressed',
//           align: 'left',
//           event: 'closePressed'
//       },
//       customButtons: [
//           {
//               image: 'share',
//               imagePressed: 'share_pressed',
//               align: 'right',
//               event: 'sharePressed'
//           }
//       ],
//       menu: {
//           image: 'menu',
//           imagePressed: 'menu_pressed',
//           title: 'Test',
//           cancel: 'Cancel',
//           align: 'right',
//           items: [
//               {
//                   event: 'helloPressed',
//                   label: 'Hello World!'
//               },
//               {
//                   event: 'testPressed',
//                   label: 'Test!'
//               }
//           ]
//       },
//       backButtonCanClose: true
//  };
 
//  const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://www.baidu.com', '_blank', options);
//  browser.show();
}


}
