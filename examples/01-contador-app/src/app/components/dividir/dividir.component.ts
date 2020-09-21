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

  dividir(): void {
    this.contadorActualizado.emit(this.contador / 2);
  }

}
