import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromCatsActions from './store/cats.actions'
import * as fromUi from '../../../store/ui.actions'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as fromCatsSelectors from './store/cats.selectors'

export interface Cat {
  origin: string;
  description: string;
  name: string;
}

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  description$ = this.store.pipe(select(fromCatsSelectors.selectCatDescription));
  name$ = this.store.pipe(select(fromCatsSelectors.selectCatName));
  origin$ = this.store.pipe(select(fromCatsSelectors.selectCatOrigin));
  constructor(private store: Store) {
  }

  ngOnInit(): void {

  }
  getCat(): void{
    this.store.dispatch(fromCatsActions.dataLoadStarted());
    this.store.dispatch(new fromUi.StartLoading());
  }
}
