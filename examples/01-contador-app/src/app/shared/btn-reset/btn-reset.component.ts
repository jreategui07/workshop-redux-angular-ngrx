import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-reset',
  templateUrl: './btn-reset.component.html',
})
export class BtnResetComponent implements OnInit {

  @Output() contadorReseteado = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  resetContador(): void {
    this.contadorReseteado.emit(0);
  }

}
