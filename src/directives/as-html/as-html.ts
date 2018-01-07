import { Directive,ElementRef, Renderer2, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the AsHtmlDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[as-html]' // Attribute selector
})
export class AsHtmlDirective {

  @Input('as-html') html: string; 

  constructor(
    public sanitizer: DomSanitizer
    , private elementRef: ElementRef
    , private renderer: Renderer2
  ) {
    console.log('Hello AsHtmlDirective Directive');
    this.setHtml(this.html)
  }

  private setHtml(html: string) {
    this.renderer.setProperty(this.elementRef.nativeElement,'innerHtml',this.sanitizer.bypassSecurityTrustHtml(html));
  }

}
