import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items = [
    { title: "基本信息" },
    { title: "个人消息" },

  ];

  constructor(public navCtrl: NavController) {

  }

}
