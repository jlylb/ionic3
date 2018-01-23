import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Api } from '../../providers/provider';
import 'rxjs/add/operator/share';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  profile: FormGroup;

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
      public_email: [''],
      website: [''],
      location: [''],
      bio: [''],
    });
    let profile = this.navParams.get('profile')||{};
    this.profile.patchValue(profile.profile||{});
  }

  onSubmit() {
    console.log(this.profile.value, this.profile.valid);
    if (!this.profile.valid) {
      return false;
    }
    let seq = this.api.post('users/profile', this.profile.value).share();

    seq.subscribe((res: any) => {

      console.log(res);
      if (res.status == 1) {
        console.log(res.data)

      } else {

      }
    }, err => {
      console.error('ERROR', err);
    });
  }

}
