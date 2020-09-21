import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
})
export class MultiplicarComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorActualizado = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(value: string): void {
    // tslint:disable-next-line: radix
    this.contadorActualizado.emit(this.contador * parseInt(value));
  }

  contadorReset(): void {
    this.contadorActualizado.emit(0);
  }

}
