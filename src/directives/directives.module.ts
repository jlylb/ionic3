import { NgModule } from '@angular/core';
import { AsHtmlDirective } from './as-html/as-html';
import { RefreshDirective } from './refresh/refresh';
@NgModule({
	declarations: [AsHtmlDirective,
    RefreshDirective],
	imports: [],
	exports: [AsHtmlDirective,
    RefreshDirective]
})
export class DirectivesModule {}
