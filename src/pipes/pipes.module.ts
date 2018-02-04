import { NgModule } from '@angular/core';
import { HtmlPipe } from './html/html';
import { MydatePipe } from './mydate/mydate';
import { IntToDatePipe } from './int-to-date/int-to-date';
import { NewpipePipe } from './newpipe/newpipe';

@NgModule({
	declarations: [HtmlPipe,IntToDatePipe,
    MydatePipe,
    NewpipePipe],
	imports: [],
	exports: [HtmlPipe,IntToDatePipe,
    MydatePipe,
    NewpipePipe]
})
export class PipesModule {}
