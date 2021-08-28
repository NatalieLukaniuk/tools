import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { CatsService } from '../cats.service';
import * as fromCatsActions from './cats.actions';
import * as fromUi from '../../../../store/ui.actions';

@Injectable()
export class CatsEffects {

  constructor(
    private actions$: Actions,
    private catsService: CatsService
  ) {}

getCat$ = createEffect(() =>
this.actions$.pipe(
  ofType(fromCatsActions.dataLoadStarted),
  exhaustMap(action => this.catsService.getCat().pipe(
    mergeMap(response =>
      [fromCatsActions.dataLoadCompleted({origin: response.origin, description: response.description, name: response.name}),
      new fromUi.StopLoading()]
      ),
    catchError((error: any) => of(fromCatsActions.dataLoadFailed(error)))
  ))
)

);
  }


