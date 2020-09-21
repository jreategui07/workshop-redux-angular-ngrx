import { createReducer, on } from '@ngrx/store';
import * as contadorAcciones from '../actions/contador.actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(contadorAcciones.incrementar, state => state + 1),
  on(contadorAcciones.decrementar, state => state - 1),
  on(contadorAcciones.multiplicar, (state, { numero }) => state * numero),
  on(contadorAcciones.dividir, (state, { numero }) => state / numero),
  on(contadorAcciones.inicializar, (state, { numero }) => numero),
  on(contadorAcciones.reset, state => 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
