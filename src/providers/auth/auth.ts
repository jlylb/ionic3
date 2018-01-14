import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { Storage } from '@ionic/storage';


@Injectable()
export class AuthProvider implements HttpInterceptor {

  token:string = "";

  constructor(
    public storage:Storage
  ) {
    this.storage.get('token').then((data)=>{
      console.log(data)
      this.token=data;
    });
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(this.token)
     const clonedRequest = req.clone({
          //headers: req.headers.set('Authorization', "Bearer "+this.token)
          params: req.params.set('token',this.token)
      });
      return next.handle(clonedRequest);
  }

}
