import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dividir',
  templateUrl: './dividir.component.html',
})
export class DividirComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorActualizado = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  dividir(value: string): void {
    if (!value) {
      return;
    }
    // tslint:disable-next-line: radix
    this.contadorActualizado.emit(this.contador / parseInt(value));
  }

  contadorReset(): void {
    this.contadorActualizado.emit(0);
  }

}
