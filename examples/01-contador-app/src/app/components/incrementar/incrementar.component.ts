import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementar',
  templateUrl: './incrementar.component.html',
})
export class IncrementarComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorActualizado = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementar(): void {
    this.contadorActualizado.emit(this.contador + 1);
  }

  contadorReset(): void {
    this.contadorActualizado.emit(0);
  }

}
