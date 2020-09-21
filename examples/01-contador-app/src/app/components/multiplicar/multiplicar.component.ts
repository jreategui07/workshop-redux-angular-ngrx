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

  multiplicar(): void {
    this.contadorActualizado.emit(this.contador * 2);
  }

}
