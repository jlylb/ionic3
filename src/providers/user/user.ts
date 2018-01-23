import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  static token: string = '';

  constructor(
    public storage: Storage
    , public events: Events
  ) {
    console.log('Hello UserProvider Provider');
  }

  isLogin(): Promise<any> {
    return this.storage.get('token').then((value) => {
      //return value;
      console.log(value)
      return this.isExpire(value) ? value : '';
    });
  }

  isExpire(token) {
    if (!token) {
      return false;
    }
    let reqTime = (token.split('_').pop()) * 1000;
    let expireTime = 24 * 3600 * 1000;
    let curTime = (new Date()).getTime();
    return reqTime + expireTime > curTime;
  }

  logout(): Promise<any> {
    return this.storage.remove('token');
  }

}
