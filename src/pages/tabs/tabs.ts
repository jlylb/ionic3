import { Component, ViewChild, Renderer2, AfterViewInit, ElementRef } from '@angular/core';
import { IonicPage, ModalController, Tabs, Events } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements AfterViewInit {

  @ViewChild('mytabs') tabRef: Tabs;


  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  //tab3Root:any = '';

  tab1Title = "首页";
  tab2Title = "分类";
  tab3Title = "个人中心";

  constructor(
    public modalCtrl: ModalController
    , public user: UserProvider
    , public events: Events
    , public renderer: Renderer2
    , private elementRef: ElementRef
  ) {

  }

  ionViewDidLoad() {


    let tab = this.queryElement(this.elementRef.nativeElement, '.tabbar');

    this.events.subscribe('tabs', (res) => {

      if (res == 'hide') {
        console.log(1111)
        this.renderer.setStyle(tab, 'display', 'none');
      } else {
        console.log(2222)
        this.renderer.removeStyle(tab, 'display')
        //this.renderer.setStyle(tab, 'display', 'block');
      }

    });

  }

  queryElement(elem: HTMLElement, q: string): HTMLElement {
    return <HTMLElement>elem.querySelector(q);
  }

  ngAfterViewInit() {

  }

  login(ev: any) {

    this.user.isLogin().then((res: any) => {
      console.log(res)
      if (res) {
        ev.root = 'ContactPage';
        this.tabRef.select(ev);
      } else {
        ev.root = '';
        this.presentProfileModal(ev);
      }
    });
  }


  presentProfileModal(ctab) {
    let profileModal = this.modalCtrl.create('LoginPage', { tab: this.tabRef, ctab: ctab }, { enableBackdropDismiss: true });
    profileModal.present();
  }

}
