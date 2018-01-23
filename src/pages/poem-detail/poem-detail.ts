import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events,Slides } from 'ionic-angular';
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
  items: string[] = ['content','zhujie','comment'];

  @ViewChild(Slides) slides: Slides;

  comments: any[]=[
    {aa:1112},
    {aa:111},
    {aa:111},
    {aa:111},
    {aa:111},
    {aa:111},
    {aa:111},
    {aa:111},
    {aa:111},
    {aa:111}
  ]

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public sanitizer: DomSanitizer
    , private events: Events
  ) {
    this.selectedItem = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemDetailPage');
  }

  ionViewWillEnter(){
    this.events.publish('tabs','hide')
  }
  ionViewWillLeave(){
    this.events.publish('tabs','show')
  }

  showHtml(html:any){
    if(!html){
      return '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.item = this.items[currentIndex];
  }

  slideTo(i: number) {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    if(i==currentIndex){
      return;
    }
    this.slides.slideTo(i);
  }

  goMore(event: Event){
    event.stopPropagation();
    event.preventDefault();
    this.slides.slideTo(2);
  }

}
