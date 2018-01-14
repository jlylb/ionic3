import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,App } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../providers/provider';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/share';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  account: FormGroup;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private fb: FormBuilder
    , public viewCtrl: ViewController
    , public api: Api
    , public storage: Storage
    , public app: App
  ) {
    console.log('UserId',this.navParams.get('tab'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit() {
    this.account = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [''],
    });
  }

  onSubmit() {
    console.log(this.account.value, this.account.valid);
    if (!this.account.valid) {
      return false;
    }
    let seq = this.api.post('users/login', this.account.value).share();

    seq.subscribe((res: any) => {

      console.log(res);
      if (res.status == 1) {
        console.log(res.data)
        this.storage.set('token', res.data);
        this.navParams.get('ctab').root='ContactPage';
        this.navParams.get('tab').select(this.navParams.get('ctab'));
        this.dismiss();
      } else {

        this.storage.set('token', '');
      }
    }, err => {
      console.error('ERROR', err);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
