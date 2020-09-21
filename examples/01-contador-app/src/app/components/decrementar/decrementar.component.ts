import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as contadorActions from '../../store/actions/contador.actions';

@Component({
  selector: 'app-decrementar',
  templateUrl: './decrementar.component.html',
})
export class DecrementarComponent implements OnInit {

  contador: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

  decrementar(): void {
    this.store.dispatch(contadorActions.decrementar());
  }

}
