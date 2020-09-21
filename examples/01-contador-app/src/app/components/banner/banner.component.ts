import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as contadorActions from '../../store/actions/contador.actions';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent implements OnInit {

  contador: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  initCustomValue(value: string): void {
    if (!value) {
      return;
    }
    // tslint:disable-next-line: radix
    this.store.dispatch(contadorActions.inicializar({ numero: parseInt(value) }));
  }

}
