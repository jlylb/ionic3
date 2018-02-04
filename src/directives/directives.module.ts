import { NgModule } from '@angular/core';
import { AsHtmlDirective } from './as-html/as-html';
import { RefreshDirective } from './refresh/refresh';
import { IonMessageDirective } from './ion-message/ion-message';
@NgModule({
	declarations: [AsHtmlDirective,
    RefreshDirective,
    IonMessageDirective],
	imports: [],
	exports: [AsHtmlDirective,
    RefreshDirective,
    IonMessageDirective]
})
export class DirectivesModule {}
