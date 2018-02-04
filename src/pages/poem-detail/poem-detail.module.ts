import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoemDetailPage } from './poem-detail';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { IonCommentComponent } from '../../components/ion-comment/ion-comment';
@NgModule({
  declarations: [
    PoemDetailPage,IonCommentComponent
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(PoemDetailPage),ComponentsModule,DirectivesModule
  ],
  entryComponents: [
    IonCommentComponent
  ]
})
export class PoemDetailPageModule {}
