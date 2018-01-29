import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
