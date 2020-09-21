import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as contadorActions from '../../store/actions/contador.actions';

@Component({
  selector: 'app-btn-reset',
  templateUrl: './btn-reset.component.html',
})
export class BtnResetComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  resetContador(): void {
    this.store.dispatch(contadorActions.reset());
  }

}
