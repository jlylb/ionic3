import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Slides } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../providers/provider';
import 'rxjs/add/operator/share';


/**
 * Generated class for the PoemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poem-detail',
  templateUrl: 'poem-detail.html',
})
export class PoemDetailPage implements OnInit, OnChanges {

  selectedItem: any
  item: string = 'content';
  items: string[] = ['content', 'zhujie', 'comment'];

  @ViewChild(Slides) slides: Slides;

  comment: FormGroup;

  page: number = 1;

  ismore: boolean = true;

  comments: Array<any> = [];

  message={
    content:{
      required:'评论内容必须填写',
      minlength:'最少4个字符',
    }
  };

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public sanitizer: DomSanitizer
    , private events: Events
    , private fb: FormBuilder
    , public api: Api
  ) {
    this.selectedItem = this.navParams.get("item");
  }

  ngOnInit() {
    this.comment = this.fb.group({
      content: ['', [Validators.required,Validators.minLength(4)]],
      entity_id: ['', Validators.required],
    });
    this.comment.patchValue({ entity_id: this.selectedItem.id || 0 });
    this.getComments();
  }

  ngOnChanges(){
    //this.comment.patchValue({ content: '' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemDetailPage');
  }

  ionViewWillEnter() {
    this.events.publish('tabs', 'hide')
  }
  ionViewWillLeave() {
    this.events.publish('tabs', 'show')
  }

  showHtml(html: any) {
    if (!html) {
      return '';
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    this.item = this.items[currentIndex];
  }

  slideTo(i: number) {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    if(i==2){
      this.page = 1;
      this.comments=[];
      let loading = this.api.loading();
      this.getComments(()=>{
        loading.dismiss()
      });
    }
    if (i == currentIndex) {
      return;
    }
    this.slides.slideTo(i);
  }

  goMore(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.slides.slideTo(2);
  }

  onSubmit() {
    console.log(this.comment.value, this.comment.valid, this.comment);
    if (!this.comment.valid) {
      return false;
    }
    let loading = this.api.loading({message:'数据提交中,请稍候...'});
    let seq = this.api.post('poems/create-comment', this.comment.value).share();

    seq.subscribe((res: any) => {

      console.log(res);
     this.comment.reset({content:'',entity_id: this.selectedItem.id || 0});
      
      if (res.status == 1) {
        console.log(res.data)
        this.api.toast(res.data);
      } else {
        this.api.addError(res.data,this,'comment');
      }
    }, err => {
      console.error('ERROR', err);
    },()=>{
      loading.dismiss();
    });
  }

  doInfinite(infiniteScroll) {

    if (!this.ismore){
      infiniteScroll.complete();
      return;
    }
    this.page++;

    this.getComments();

    infiniteScroll.complete();

  }

  getComments(callback?) {


    let param = { page: this.page, postId: this.selectedItem.id };

    let seq = this.api.get('poems/comment-list', param).share();

    seq.subscribe((res: any) => {

      if (res.length > 0) {

        this.comments = this.comments.concat(res);

      } else {
        this.ismore = false;
      }

    }, err => {
      console.error('ERROR', err);
    },()=>{
      callback&&callback();
    });
  }

  doRefresh(refresher){
    this.page=1;
    this.ismore = true;
    this.comments=[];
    this.getComments();
    refresher.complete();
  }

}
