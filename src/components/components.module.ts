import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonProductsComponent } from './ion-products/ion-products';
import { IonPoemComponent } from './ion-poem/ion-poem';

@NgModule({
	declarations: [IonProductsComponent,
    IonPoemComponent],
	imports: [IonicModule],
	exports: [IonProductsComponent,
    IonPoemComponent]
})
export class ComponentsModule {}
