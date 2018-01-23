import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
import { UserProvider } from '../../providers/user/user';




@IonicPage()
@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html',
})
export class AvatarPage {

  path: string;

  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private transfer: FileTransfer,
    public user: UserProvider,
    public loadingCtrl: LoadingController
  ) {

  }

  ionViewWillEnter() {

    this.path=this.navParams.get('profile').avatar
  }

  /**
   * 打开摄像头
   */
  selectAvatar(type: number = 1) {
    const options: CameraOptions = {
      quality: 90,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }
    if (type == 1) {
      options.sourceType = this.camera.PictureSourceType.CAMERA;
      options.destinationType = this.camera.DestinationType.DATA_URL;
    } else {
      options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
      options.destinationType = this.camera.DestinationType.FILE_URI;
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log("got file: " + imageData);

      if (type == 1) {
        // If it's base64:
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.path = base64Image;
      } else {
        //If it's file URI
        this.path = imageData;
      }

      this.upload();

    }, (err) => {
      // Handle error
    });
  }


  /**
   * 文件上传
   */
  upload() {
    let apiPath = "http://www.seephp.com/api.php/v1/users/avatar?token=" + UserProvider.token;
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',
      headers: {},
      params: {}
    };

    console.log(UserProvider.token)

    let loading = this.loadingCtrl.create({
      content: '正在上传图片...'
    });

    loading.present();

    this.fileTransfer.upload(this.path, apiPath, options)
      .then((data) => {
        console.log(data);
        loading.dismiss();
      }, (err) => {
        console.log(err);
        loading.dismiss();
      });
  }


}
