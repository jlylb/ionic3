import { Component, Input, OnInit, Optional, Host, SkipSelf, OnChanges,DoCheck } from '@angular/core';
import { FormControl, ControlContainer } from '@angular/forms';



@Component({
  selector: 'form-message',
  templateUrl: 'form-message.html'
})
export class FormMessageComponent implements OnInit, OnChanges,DoCheck {

  @Input() controlName: string;

  @Input() message: any;

  controlMessage: any;

  showMessage: string = '';

  _parent: ControlContainer;

  current: FormControl;

  constructor(
    @Optional() @Host() @SkipSelf() parent: ControlContainer
  ) {
    console.log('Hello IonMessageDirective Directive');
    this._parent = parent;
    console.log(this._parent);
  }

  ngOnInit() {
    console.log(this.controlName, this._parent.control.get(this.controlName))
    this.controlMessage = this.message[this.controlName]||{};
    this.current = <FormControl>this._parent.control.get(this.controlName);
    this.setMessage();

  }

  ngOnChanges() {
    this.current = <FormControl>this._parent.control.get(this.controlName);
    this.controlMessage = this.message[this.controlName]||{};
    console.log(this.current,this.controlMessage)
    this.current.statusChanges.subscribe((res) => {
      console.log(res);
      this.setMessage();
    })
  }

  setMessage(){
    for (let field in this.controlMessage) {
      if (this.current.hasError(field)) {
        this.showMessage = this.controlMessage[field];
        console.log(this.showMessage);
        return;
      }
    }
  }

  ngDoCheck(){

  }

}
