import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonProductsComponent } from './ion-products/ion-products';

@NgModule({
	declarations: [IonProductsComponent],
	imports: [IonicModule],
	exports: [IonProductsComponent]
})
export class ComponentsModule {}
