import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest, HttpInterceptor} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
//import { Storage } from '@ionic/storage';
import { UserProvider } from '../../providers/user/user';
import { Events } from 'ionic-angular';


@Injectable()
export class AuthProvider implements HttpInterceptor {

  token:string = "";

  constructor(
    public user:UserProvider
    , public events: Events
  ) {

    this.user.isLogin().then((res:any)=>{
      console.log(res)
      this.token=res;
      UserProvider.token = res;
    });

  }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(this.token)
    this.events.subscribe('user:token', (token) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.token = token;
      UserProvider.token = token;
      console.log('Welcome', token);
    });
    // this.events.subscribe('user:logout', () => {
    //   // user and time are the same arguments passed in `events.publish(user, time)`
    //   this.token = '';
    //   console.log(111111111)
    // });
     const clonedRequest = req.clone({
          //headers: req.headers.set('Authorization', "Bearer "+this.token)
          params: req.params.set('token',this.token)
      });
      return next.handle(clonedRequest);
  }

}
