import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorActualizado = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  contadorReset(): void {
    this.contadorActualizado.emit(0);
  }

  initCustomValue(value: string): void {
    if (!value) {
      return;
    }
    // tslint:disable-next-line: radix
    this.contadorActualizado.emit(parseInt(value));
  }

}
