import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonProductsComponent } from './ion-products/ion-products';
import { IonPoemComponent } from './ion-poem/ion-poem';
import { RefreshComponent } from './refresh/refresh';
import { FormComponent } from './form/form';
import { FormInputComponent } from './form-input/form-input';

@NgModule({
	declarations: [IonProductsComponent,
    IonPoemComponent,
    RefreshComponent,
    FormComponent,
    FormInputComponent],
	imports: [IonicModule],
	exports: [IonProductsComponent,
    IonPoemComponent,
    RefreshComponent,
    FormComponent,
    FormInputComponent]
})
export class ComponentsModule {}
