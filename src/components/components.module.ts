import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonProductsComponent } from './ion-products/ion-products';
import { IonPoemComponent } from './ion-poem/ion-poem';
import { RefreshComponent } from './refresh/refresh';

@NgModule({
	declarations: [IonProductsComponent,
    IonPoemComponent,
    RefreshComponent],
	imports: [IonicModule],
	exports: [IonProductsComponent,
    IonPoemComponent,
    RefreshComponent]
})
export class ComponentsModule {}
