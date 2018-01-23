import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ViewController } from 'ionic-angular';
import { Api } from '../../providers/provider';
import 'rxjs/add/operator/share';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

  items = [
    { title: "基本信息", page: 'ProfilePage' },
    { title: "个人消息", page: 'AccountPage' },

  ];

  profile: any = [];




  constructor(
    public navCtrl: NavController
    , public api: Api
    , public user: UserProvider
    , public viewCtrl: ViewController
  ) {

  }

  ngOnInit() {

  }

  go(page: string) {
    this.navCtrl.push(page, { profile: this.profile });
  }

  ionViewWillEnter() {
    this.api.get('users/user-profile').share().subscribe((res: any) => {
      console.log(res)
      this.profile = res;
    });

  }

  ionViewCanEnter(): boolean {
    return true;
  }

  logout() {
    this.user.logout().then(() => {
      this.api.alert('退出成功', () => {
        this.navCtrl.parent.getSelected().root = '';
        this.navCtrl.parent.select(0)
      });
    });
  }



}
