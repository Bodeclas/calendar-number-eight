import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InputFormData } from '../../models/data';

@Component({
  selector: 'app-select-date-layout',
  templateUrl: './select-date-layout.component.html',
  styleUrls: ['./select-date-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectDateLayoutComponent implements OnInit {
  public form: FormGroup;
  @Output() submit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      startDate: ['', Validators.required],
      numberOfDays: ['', Validators.required],
      countryCode: ['', Validators.required],
    });
  }

  onSubmit(data) {
    console.log(data);
    this.submit.emit(data);
  }
}
