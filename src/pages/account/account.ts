import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../providers/provider';
import 'rxjs/add/operator/share';


@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage implements OnInit {

  account: FormGroup;

  message = {
    username: {
      required: '用户名必须填写',
    },
    email: {
      required: '邮箱必须填写',
    },
    current_password: {
      required: '当前密码必须填写',
    },
    new_password: {
      required: '新密码必须填写',
    }
  };

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private fb: FormBuilder
    , public api: Api
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  ngOnInit() {
    this.account = this.fb.group({
      username: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      new_password: [''],
      current_password: ['',Validators.required]
    });
    let profile = this.navParams.get('profile') || {};
    this.account.patchValue(profile);
  }

  onSubmit() {
    console.log(this.account.value, this.account.valid);
    if (!this.account.valid) {
      return false;
    }
    let loading = this.api.loading();
    let seq = this.api.post('users/account', this.account.value).share();

    seq.subscribe((res: any) => {

      console.log(res);
      if (res.status == 1) {
        console.log(res.data)
        this.api.toast(res.data);
      } else {
        this.api.addError(res.data,this);
      }
    }, err => {
      console.error('ERROR', err);
    }, () => {
      loading.dismiss();
    });
  }

}
