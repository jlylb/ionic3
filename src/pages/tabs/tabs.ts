import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

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

  tab1Root:any = Tab1Root;
  tab2Root:any = Tab2Root;
  tab3Root:any = Tab3Root;

  tab1Title = "首页";
  tab2Title = "精选";
  tab3Title = "个人中心";

  constructor() {

  }
}
