import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, Events, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../providers/provider';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/share';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  account: FormGroup;

  message = {
    login: {
      required: '用户名或邮箱必须填写',
    },
    password: {
      required: '密码必须填写',
    }
  };

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private fb: FormBuilder
    , public viewCtrl: ViewController
    , public api: Api
    , public storage: Storage
    , public app: App
    , public events: Events
    , public loadingCtrl: LoadingController
  ) {
    console.log('UserId', this.navParams.get('tab'));
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

    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '登录中.....'
    });

    loading.present();

    let seq = this.api.post('users/login', this.account.value).share();

    seq.subscribe((res: any) => {

      console.log(res);
      if (res.status == 1) {
        console.log(res.data)
        this.storage.set('token', res.data);
        this.events.publish('user:token', res.data);
        this.navParams.get('ctab').root = 'ContactPage';
        this.navParams.get('tab').select(this.navParams.get('ctab'));
        this.dismiss();
      } else {
        for (let field in res.data) {
          this.message[field].validateField = res.data[field][0];
          this.account.get(field).setErrors({ validateField: true });
        }
        this.storage.set('token', '');
      }
      loading.dismiss();
    }, err => {
      console.error('ERROR', err);
      loading.dismiss();
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
