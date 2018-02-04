import { Directive, Input, OnInit,Optional,Host,SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';


@Directive({
  selector: '[ion-message]' 
})
export class IonMessageDirective implements OnInit{

@Input('ion-message') controlName: string;

_parent:ControlContainer;

  constructor(
    @Optional() @Host() @SkipSelf() parent: ControlContainer
  ) {
    console.log('Hello IonMessageDirective Directive');
    this._parent=parent;
  }

  ngOnInit(){
 
    console.log(this.controlName,this._parent.control.get(this.controlName))
  }



}
