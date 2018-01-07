import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the PoemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poem-detail',
  templateUrl: 'poem-detail.html',
})
export class PoemDetailPage {

  selectedItem: any
  item: string = 'content';

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public sanitizer: DomSanitizer
  ) {
    this.selectedItem = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemDetailPage');
  }

  showHtml(html:any){
    if(!html){
      return '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
