import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../store/app.reducer';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(fromRoot.getIsLoading));
  }

}
