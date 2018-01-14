import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(
    public storage: Storage
  ) {
    console.log('Hello UserProvider Provider');
  }

  isLogin():Promise<string>{
    return this.storage.get('token').then((value) => {
      return value;
    });
  }

}
