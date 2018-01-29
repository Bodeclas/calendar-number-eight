import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InputFormData } from '../../select-date/models/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSelectFormData(data) {
    console.log(data);
  }
}
