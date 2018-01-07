import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoemDetailPage } from './poem-detail';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PoemDetailPage
  ],
  imports: [
    IonicPageModule.forChild(PoemDetailPage),PipesModule
  ],
})
export class PoemDetailPageModule {}
