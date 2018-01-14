import { Component, ViewChild } from '@angular/core';
import { IonicPage,ModalController,Tabs } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('mytabs') tabRef: Tabs;

  tab1Root:any = Tab1Root;
  tab2Root:any = Tab2Root;
  //tab3Root:any = '';

  tab1Title = "首页";
  tab2Title = "分类";
  tab3Title = "个人中心";

  constructor(
    public modalCtrl: ModalController
    , public user: UserProvider
  ) {

  }

  login(ev){
    console.log(ev,this.tabRef)
    this.user.isLogin().then((res:any)=>{
      console.log(res)
      if(res){
        ev.root='ContactPage';
        this.tabRef.select(ev);
      }else{
        this.presentProfileModal(ev);
      }
    });
  }


  presentProfileModal(ctab) {
    let profileModal = this.modalCtrl.create('LoginPage', {tab:this.tabRef,ctab:ctab},{enableBackdropDismiss:true});
    profileModal.present();
  }

}
