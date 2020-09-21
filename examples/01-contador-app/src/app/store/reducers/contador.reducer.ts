import { createReducer, on } from '@ngrx/store';
import * as contadorAcciones from '../actions/contador.actions';

export const initialState = 0;

const contadorReducerFn = createReducer(initialState,
  on(contadorAcciones.incrementar, state => state + 1),
  on(contadorAcciones.decrementar, state => state - 1),
  on(contadorAcciones.multiplicar, (state, { numero }) => state * numero),
  on(contadorAcciones.dividir, (state, { numero }) => state / numero),
  on(contadorAcciones.inicializar, (state, { numero }) => numero),
  on(contadorAcciones.reset, state => 0),
);

export function contadorReducer(state, action) {
  return contadorReducerFn(state, action);
}
