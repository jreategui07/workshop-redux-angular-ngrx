import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decrementar',
  templateUrl: './decrementar.component.html',
})
export class DecrementarComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorActualizado = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  decrementar(): void {
    this.contadorActualizado.emit(this.contador - 1);
  }

}
