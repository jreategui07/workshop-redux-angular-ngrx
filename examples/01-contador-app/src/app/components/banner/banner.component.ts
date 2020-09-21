import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit {

  @Input() contador: number;

  constructor() { }

  ngOnInit(): void {
  }

}
