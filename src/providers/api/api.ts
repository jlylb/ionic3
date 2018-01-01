import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController } from 'ionic-angular';


@Injectable()
export class AppGlobal {
    //缓存key的配置
    static cache: any = {
        slides: "_dress_slides",
        categories: "_dress_categories",
        products: "_dress_products"
    }
    //接口基地址
    static domain = "http://www.seephp.com"

    //接口地址
    static API: any = {
        getCategories: '/api/ionic3/getCategories',
        getProducts: '/api/ionic3/getProducts',
        getDetails: '/api/ionic3/details'
    };
}



@Injectable()
export class Api {

  url: string = '/api';

  constructor(
    public http: HttpClient
    , public alertCtrl: AlertController
    , public toastCtrl: ToastController
    , public loadingCtrl: LoadingController
  ) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = params;
      /** for (let k in params) {
        reqOpts.params.set(k, params[k]);
        }*/
    }
    console.log(this.url + '/' + endpoint)

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  alert(message, callback?) {
    if (callback) {
        let alert = this.alertCtrl.create({
            title: '提示',
            message: message,
            buttons: [{
                text: "确定",
                handler: data => {
                    callback();
                }
            }]
        });
        alert.present();
    } else {
        let alert = this.alertCtrl.create({
            title: '提示',
            message: message,
            buttons: ["确定"]
        });
        alert.present();
    }
}

toast(message, callback?) {
    let toast = this.toastCtrl.create({
        message: message,
        duration: 2000,
        dismissOnPageChange: true,
    });
    toast.present();
    if (callback) {
        callback();
    }
}


}
