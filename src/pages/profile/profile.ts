import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../providers/provider';
import 'rxjs/add/operator/share';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  profile: FormGroup;

  message = {
    public_email: {
      email: '邮箱格式不正确',
    },
    website: {
      url: 'url格式不正确',
    }
  };

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private fb: FormBuilder
    , public api: Api
  ) {
  }

  ngOnInit() {
    this.profile = this.fb.group({
      name: [''],
      public_email: ['', Validators.email],
      website: [''],
      location: [''],
      bio: [''],
    });
    let profile = this.navParams.get('profile') || {};
    this.profile.patchValue(profile.profile || {});
  }

  onSubmit() {
    console.log(this.profile.value, this.profile.valid);
    if (!this.profile.valid) {
      return false;
    }
    let loading = this.api.loading({ message: '正确提交，请稍候....' });
    let seq = this.api.post('users/profile', this.profile.value).share();

    seq.subscribe((res: any) => {

      console.log(res);
      if (res.status == 1) {
        console.log(res.data)
        this.api.toast(res.data)
      } else {
        this.api.addError(res.data, this, 'profile');
      }
    }, err => {
      console.error('ERROR', err);
    }, () => {
      loading.dismiss();
    });
  }

}
