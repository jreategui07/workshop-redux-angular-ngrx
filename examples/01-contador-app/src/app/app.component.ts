import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    });
  }

}
