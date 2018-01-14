import { Component, OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage implements OnInit{

  account: FormGroup;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private fb: FormBuilder
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  ngOnInit() {
    this.account = this.fb.group({
      username: [''],
      email: [''],
      new_password: [''],
      current_password: ['']
    });
    let profile = this.navParams.get('profile');
    this.account.patchValue(profile);
  }

  onSubmit() {
    console.log(this.account.value, this.account.valid);
  }

}