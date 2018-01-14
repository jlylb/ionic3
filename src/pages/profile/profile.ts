import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';


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
  }

  onSubmit() {
    console.log(this.profile.value, this.profile.valid);
  }

}
