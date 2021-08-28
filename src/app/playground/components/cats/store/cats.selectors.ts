import { createSelector } from '@ngrx/store';
import { State } from 'src/app/store/app.reducer';
import { CatsState } from './cats.reducers';


export const getCat = (state: State) => state.cats;

export const selectCatOrigin = createSelector(
  getCat,
  (state: CatsState) => state.origin
);

export const selectCatDescription = createSelector(
  getCat,
  (state: CatsState) => state.description
);

export const selectCatName = createSelector(
  getCat,
  (state: CatsState) => state.name
);
