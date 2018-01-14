import { Component, Input, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'dy-form',
  templateUrl: 'form.html'
})
export class FormComponent implements OnInit{

  @Input() config: any[] = [];

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    console.log('Hello FormComponent Component');
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control('')));
    return group;
  }

}
